import React, { memo, useEffect, useState } from 'react';
import moment from 'moment';
import { Image, Comment, Avatar, Form, Button, List, Input } from 'antd';
import { Props } from '@/pages/type';
import { UserOutlined } from '@ant-design/icons';
import { getGoods } from '@/service/goodsService';
import CommentList from './components/commentList';
import { uploadComment } from '@/service/comment';
// import { useRecoilValue } from 'recoil';
// import { userState } from '@/store/userAtom';

import styles from './index.less'
import SIcon from '@/components/sIcon';
type goods = {
    goods_img: string,
    goods_price: number,
    goods_comment: string,
    [key: string] : any,
}

type EditorType = {
   onChange : any,
   onSubmit : any,
   submitting: boolean,
   value: string,
}

const { TextArea } = Input;
const GoodsDetail = memo(({location} : Props) => {
    const [goodsData, setGoodsData] = useState<goods>();
    const [comments, setComments] = useState<any[]>([]);
    const [commentValue, setCommentValue] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // const userStateAtom = useRecoilValue(userState);
    const [userName, setUserName] = useState('');
    const [avator, setAvator] = useState('');
    const [userId, setUserId] = useState<number>(0);
    const [goodsId, setGoodsId] = useState<number>(0);

    // const CommentList = ({ comments }) => (
    //     <List
    //       dataSource={comments}
    //       header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    //       itemLayout="horizontal"
    //       renderItem={props => <Comment {...props} />}
    //     />
    //   );


      const Editor = ({ onChange, onSubmit, submitting, value } : EditorType) => (
        <>
          <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
              发表评论
            </Button>
          </Form.Item>
        </>
      );

      const commentValueOnchange = (e:any) => {
        console.log(e.target.value);
        setCommentValue(e.target.value);
      }

      const handleSubmit = () => {
        if (!commentValue) {
          return;
        }
    
       setSubmitting(true);
    
        // setTimeout(() => {
        //     setSubmitting(false);
        //     setCommentValue('');
        //     const com = {
        //         author: 'Han Solo',
        //         avatar: 'https://joeschmoe.io/api/v1/random',
        //         content: <p>{commentValue}</p>,
        //         datetime: moment().fromNow(),
        //     }
        //     setComments([...comments, com])
        // }, 1000);
        uploadComment(commentValue, userId, goodsId).then(res => {
          setSubmitting(false);
          setCommentValue('');
          const com = {
              author: userName,
              avatar: avator,
              content: <p>{commentValue}</p>,
              datetime: moment().fromNow(),
          }
          setComments([...comments, com])
        }).catch(err => {
          console.log(err);
        })
      };
    useEffect(() => {
        setUserName(localStorage.getItem('user_name') as string);
        setAvator(localStorage.getItem('avator') as string);
        setUserId(parseInt(localStorage.getItem('id') as string))
        const path = location.pathname.split('/');
        const id = parseInt(path[3]);
        setGoodsId(id);
        getGoods(id).then(res => {
            const goods = {...res.data};
            setGoodsData(goods);
        }).catch(err => {

        })
    },[])
   
  return (
    <div className={styles.mainDiv}>
        <div className={styles.content}>
        <div className={styles.top}>
        <Image
        width={300}
        height={300}
        src={goodsData?.goods_img? `http://localhost:8080/${goodsData?.goods_img}` : ''}
        fallback="data:image/png;base64,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"
         />
         <div className={styles.price}>
            <p>价格: ￥{goodsData?.goods_price}</p>
             <div className={styles.user}>
             <Avatar size={30} icon={<UserOutlined />} />
            <div className={styles.name}>{userName}</div>
             </div>

             <div className={styles.chat}>
                <div className={styles.chatIcon}> <SIcon stand="chat"/> </div>
                <div className={styles.collect}> <SIcon stand='noCollect' /> </div>
             </div>
         </div>
        </div>

        <div className={styles.comment}>
            <h2>商品详情</h2>
            <p>{goodsData?.goods_comment}</p>
        </div>

        <div className={styles.words}>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={ avator=== 'null'?  <Avatar size={30} icon={<UserOutlined />} /> : <Avatar src={avator} alt={userName} /> }
          content={
            <Editor
              onChange={commentValueOnchange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={commentValue}
            />
          }
        />
        </div>
        </div>
       
    </div>
  )
})

export default GoodsDetail
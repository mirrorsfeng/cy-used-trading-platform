import React, { memo, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Image, Comment, Avatar, message, Button, Modal} from 'antd';
import { Props } from '@/pages/type';
import { UserOutlined, StarOutlined, StarFilled, AliwangwangFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { getGoods, deleteGoods } from '@/service/goodsService';
import CommentList from './components/commentList';
import ChatWindow from '@/components/chatWindow';
import { deleteCollect, createCollect, getUserCollect  } from '@/service/collectService';
import { getComment, uploadComment } from '@/service/commentService';

import Editor from './components/editor';
// import { useRecoilValue } from 'recoil';
// import { userState } from '@/store/userAtom';

import styles from './index.less'

const { confirm } = Modal;

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

const GoodsDetail = memo(({location, history} : Props) => {
    const [goodsData, setGoodsData] = useState<goods>();
    const [comments, setComments] = useState<any[]>([]);
    const [commentValue, setCommentValue] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const [userName, setUserName] = useState('');
    const [avator, setAvator] = useState('');
    const [userId, setUserId] = useState<number>(0);
    const [goodsId, setGoodsId] = useState<number>(0);
    const [chatIsShow, setChatIsShow] = useState<boolean>(false);

    const [isCollect, setIsColllect] = useState<boolean>(false);

      const commentValueOnchange = (e:any) => {
        setCommentValue(e.target.value);
      }

      const handleSubmit = () => {
        if (!commentValue) {
          return;
        }
    
       setSubmitting(true);
        uploadComment(commentValue, userId, goodsId).then((res:any) => {
          setSubmitting(false);
          setCommentValue('');
          const com = {
              author: userName,
              avatar: avator=== 'null'?  <Avatar size={30} icon={<UserOutlined />} /> : <Avatar src={avator} alt={userName} />,
              content: <p>{commentValue}</p>,
              datetime: moment().fromNow(),
          }
          setComments([...comments, com])
        }).catch((err:any) => {
          console.log(err);
        })
      };

      const onCollect = () => {
        if(isCollect) {
            deleteCollect(userId, goodsId).then(res => {
              setIsColllect(false);
              message.success('取消收藏成功！');
            }).catch(err => {
              message.error('取消收藏失败');
            })
           
        }else {
            createCollect(userId, goodsId).then(res => {
              message.success('收藏成功！');
              setIsColllect(true);
            }).catch(err => {
              message.error('收藏失败');
            })
        }
      }

      const openChat = () => {
        setChatIsShow(true);
      }

      const deleteGood = () => {
        confirm({
          title: '确定下架该商品？',
          icon: <ExclamationCircleOutlined />,
          okText: '是',
          cancelText: '否',
          onOk() {
            if(goodsData && goodsData.id){
              deleteGoods(goodsData.id).then(res => {
                console.log(res);
                history.push('/portal');
              })
            }
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    useEffect(() => {
        const user_id = parseInt(localStorage.getItem('id') as string);
        setUserName(localStorage.getItem('user_name') as string)
        setAvator(localStorage.getItem('avator') as string);
        setUserId(user_id);
        const path = location.pathname.split('/');
        const id = parseInt(path[3]);
        setGoodsId(id);
        getGoods(id).then(res => {
            const goods = {...res.data};
            setGoodsData(goods);
        }).catch(err => {

        });

        getComment(id).then(res => {
          if(res.data.result.length !== 0) {
          const commentData = (res.data.result || []).map((item :any) => {
            return {
              author: item.cy_User.user_name,
              avatar: item.cy_User.avator?  <Avatar src={`http://localhost:8080/${item.cy_User.avator}`} alt={userName} /> : <Avatar size={30} icon={<UserOutlined />} />,
              content: <p>{item.content}</p>,
              datetime: moment(item.createdAt).fromNow(),
            }
          })
          setComments(commentData);
        }
        });

        getUserCollect(user_id).then(res => {
          const stand = res.data.result.find((item : any) => {
            return item === id
          })
         if(stand) {
           setIsColllect(true);
         }
        })
        
    },[])
   
  return (
    <div className={styles.mainDiv}>
        <div className={styles.content}>
          {
            userName === goodsData?.cy_User.user_name?
            <Button onClick={deleteGood}  className={styles.btn} type="primary">下架</Button> : <></>
          }
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
               <div>
                 {
                   goodsData?.cy_User.avator? <Avatar size={30} src={`http://localhost:8080/${goodsData?.cy_User.avator}`} /> : <Avatar size={30} icon={<UserOutlined />} />
                 }
               </div>
             
            <div className={styles.name}>{goodsData?.cy_User.user_name}</div>
             </div>

             <div className={styles.chat}>
                <div className={styles.chatIcon} onClick={openChat} > <AliwangwangFilled style={{fontSize: '25px', color: '#3498db'}} /> </div>
                <div className={styles.collect} onClick={onCollect}> { isCollect? <StarFilled style={{color: '#3498db', fontSize: '25px'}}/> : <StarOutlined style={{fontSize: '25px'}} />  } </div>
                <ChatWindow chatIsShow={chatIsShow} setChatIsShow={setChatIsShow} chatName={goodsData?.cy_User.user_name} otherAvator = { goodsData?.cy_User.avator} />
             </div>
         </div>
        </div>

        <div className={styles.comment}>
            <h2>商品详情</h2>
            <p>{goodsData?.goods_comment}</p>
        </div>

        <div className={styles.words}>
          <p className={styles.wordText}>评  论</p>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={ avator=== 'null'?  <Avatar size={30} icon={<UserOutlined />} /> : <Avatar src={`http://localhost:8080/${avator}`} alt={userName} /> }
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
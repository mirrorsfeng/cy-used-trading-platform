import React, { memo, useEffect, useState } from 'react';
import { Avatar, Divider, message, Modal, Popconfirm  } from 'antd';
import { UserOutlined,SettingFilled, StarFilled } from '@ant-design/icons';

import { getUserAllGoods } from '@/service/collectService';
import SmallCard from '@/components/tabShow/smallCard';
import ImageOperate from '@/components/imageOperate';
import Operate from './component/operate';
import { changeUserAvator } from '@/service/userService';

import styles from './index.less';

type GoodsDataItem = {
    goods_comment: string,
    id: number,
    goods_price: string,
    goods_type: string,
    goods_img: string
}
type GoodsDataType = (GoodsDataItem)[]
const User = memo(() => {
    const [userName, setUserName] = useState<string>('');
    const [starNum, setStarNum] = useState<any>();
    const [goodsData, setGoodsData] = useState<GoodsDataType>();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [userAvator, setUserAvator] = useState<string>('');
    const [tabStand, setTabStand] = useState<number>(1);


    const uploadAvator = (file : any) => {
      const id = localStorage.getItem('id') as string;
      changeUserAvator(parseInt(id), file).then(res => {
        console.log(res);
        localStorage.setItem('avator', res.data.result.avator);
        setUserAvator(res.data.result.avator);
        message.success('更换成功！');
      }).catch(err => {
        console.log(err);
      })
    }
  
    const imageConfig = {
      setBackFile: uploadAvator,
      circleSize: {
        width: 200,
        height: 200,
      }
    };
    useEffect(() => {
      const id =  parseInt(localStorage.getItem('id') || '0');
      setUserName(localStorage.getItem('user_name') as string);
      setUserAvator(localStorage.getItem('avator') as string);
      getUserAllGoods(id).then(res => {
        setStarNum(res.data.result.length);
        setGoodsData(res.data.result.goods);
      })
    },[])

    const handleCancel = () => {
      setIsVisible(false);
    }

    const onUserAvator = () => {
      
      setIsVisible(true);
    }

    const changeTab = (num:any) => {
     setTabStand(num);
    }

  
  return (
    <div className={styles.mainDiv}>
        <div className={styles.userAva}>
            <div className={styles.info}>
              <div>
              <Popconfirm title="是否要更换头像？" okText="是" cancelText="否" onConfirm={onUserAvator}>
               {
                 userAvator !== 'null'? <Avatar size={58} src={`http://localhost:8080/${userAvator}`} /> :  <Avatar size={58} icon={<UserOutlined />} /> 
               }
              </Popconfirm>
            </div>
            <div className={styles.name}>{userName}</div>
            <Modal title="更换用户头像" visible={isVisible} onCancel={handleCancel} maskClosable={false} footer={null}>
          <ImageOperate imageConfig={imageConfig} />
            </Modal>
            </div>
        </div>
        <div className={styles.iconHeader}>
        <div className={styles.iconCss} onClick={() => changeTab(1)}> <StarFilled style={{color: '#f3a034', fontSize: '20px'}} /> <p>收藏 {starNum} </p>  </div>
        <div className={styles.iconCss} onClick={() => changeTab(2)}><SettingFilled style={{color: '#23c9ed', fontSize: '20px'}}/>  <p>设置</p> </div>
        </div>
        <div className={styles.content}>
        {
          tabStand === 1?
          goodsData?.map((item:any) => {
            return ( 
              <div key={item.id} className={styles.goodsItem}>
                <SmallCard 
                    img={item.goods_img}
                    comment={item.goods_comment}
                    price={item.goods_price}
                    id={item.id}
                    type={item.goods_type}
                    user_img={''}
                    />
              </div>
            )
          }) : <Operate />
        }
        </div>
    </div>
  )
})

export default User
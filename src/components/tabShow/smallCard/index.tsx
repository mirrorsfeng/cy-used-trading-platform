import React, { memo } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import styles from './index.less';

type Props = {
    img: string,
    comment: string,
    price: number,
}

const SmallCard = memo((props:Props) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.image} style={{backgroundImage: `url("http://localhost:8080/${props.img}")`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}} ></div>
        <div className={styles.comment}>{props.comment}</div>
        <div className={styles.footer}>
            <div>
              <Avatar size={30} icon={<UserOutlined />} />
            </div>
            <div className={styles.price}>￥{props.price}</div>    
        </div>
    </div>
  )
})

export default SmallCard
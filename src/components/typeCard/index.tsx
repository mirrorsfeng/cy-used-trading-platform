import React, { memo } from 'react'
import styles from './index.less';
import { Avatar } from 'antd';

type Props = {
    img: string,
    comment: string,
    avatar: string,
    price: number,
}
const TypeCard = memo(({img, comment, avatar, price} : Props) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.image}
         style={{backgroundImage: `url("http://localhost:8080/${img}")`, backgroundSize: 'cover'}} 
         >
        </div>
        <div className={styles.comment}>{comment}</div>
        <div className={styles.footer}>
            <Avatar />
            <div className={styles.price}>{price}</div>
        </div>
    </div>
  )
})

export default TypeCard
import React, { memo } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';

import portalCategory from '@/constants/category';
import styles from './index.less';
import { useHistory } from 'umi';

type Props = {
    img: string,
    comment: string,
    price: number,
    user_img: string,
    id: number,
    type: string
}

const SmallCard = memo((props:Props) => {
  const history = useHistory();
  const goToDetail = () => {
    const type = portalCategory.find(item => {
      return item[0] === props.type
    }) as string[]
    history.push(`/goods/${type[1]}/${props.id}`);
  }
  return (
    <div className={styles.mainDiv}>
        <div className={styles.image} style={{backgroundImage: `url("http://localhost:8080/${props.img}")`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}} onClick={goToDetail} ></div>
        <div className={styles.comment}>
          <Tooltip title={props.comment}>
          <div className={styles.text}>{props.comment}</div>
          </Tooltip>
        </div>
        <div className={styles.footer}>
            <div>
              {
                props.user_img? <Avatar size={30} src={`http://localhost:8080/${props.user_img}`} /> : <Avatar size={30} icon={<UserOutlined />} />
              }
            </div>
            <div className={styles.price}>￥{props.price}</div>    
        </div>
    </div>
  )
})

export default SmallCard
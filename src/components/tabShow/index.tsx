import React, { memo, useEffect, useState } from 'react';
import { getTypeGoods } from '@/service/goodsService'; 
import SmallCard from './smallCard';
import styles from './index.less';

interface Props {
    name: string,
    type: '游戏' | '电子产品' | '生活用品' | '书籍' | '零食' | '其他', 
}

const TabShow = memo((props: Props) => {
  const [cardData, setCardData] = useState<(any)[]>([]);

  useEffect(() => {
    getTypeGoods(props.type, 5).then(res => {
      const data:(any)[] = [];
  
      for(let i=0;i<4;i++){
        if(!res.data[i]) {
          break;
        }
        data.push(res.data[i]);
      }
      setCardData(data);
    }).catch(err => {
        localStorage.removeItem('token');
        alert('登录认证失效，请重新登录');
    })
  },[])
  return (
    <div className={styles.mainDiv}>
        <div className={styles.text}>{props.name}</div>
        <div className={styles.imgContent}>
          {
            cardData.map((item) => {
              return (
                <SmallCard 
                key={item.id}
                comment={item.goods_comment} 
                price={item.goods_price}
                img={item.goods_img}
                />
              )
            })
          }  
        </div>
    </div>
  )
})

export default TabShow
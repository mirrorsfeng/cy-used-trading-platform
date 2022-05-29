import { getMyGoods } from '@/service/goodsService';
import SmallCard from '@/components/tabShow/smallCard';
import React, { memo, useEffect, useState } from 'react'
import styles from './index.less';
const SelfUp = memo(() => {
    const [myData, setMyData] = useState<(any)[]>();

    useEffect(() => {
        const id = parseInt(localStorage.getItem('id') as string);
        getMyGoods(id).then(res => {
            setMyData(res.data.result);
        })
    },[])
  return (
    <div className={styles.mainDiv}>
        {
            myData?.map((item:any) => {
                return ( 
                  <div key={item.id} className={styles.goodsItem}>
                    <SmallCard 
                        img={item.goods_img}
                        comment={item.goods_comment}
                        price={item.goods_price}
                        id={item.id}
                        type={item.goods_type}
                        user_img={item.cy_User.avator}
                        />
                  </div>
                )
              })
        }
    </div>
  )
})

export default SelfUp
import React, { memo, useEffect, useState } from 'react'
import { Pagination } from 'antd';
import { Props } from '@/pages/type';

import { getTypeGoods } from '@/service/goodsService';
import portalCategory from '@/constants/category';
import SmallCard from '@/components/tabShow/smallCard';
import styles from './index.less';

const Type = memo(({location}:Props) => {
    const [dataArr, setDataArr] = useState<(any)[]>();
    const [title, setTitle] = useState('');

    useEffect(() => {
      const path = location.pathname.split('/');
      const type = portalCategory.find((item) => {
        return item[1] === path[2];
      }) as string[];
      setTitle(type[0]);
      getTypeGoods(type[0]).then(res => {
        setDataArr(res.data);
      }).catch(err => {

      })
    },[]);
  return (
    <div className={styles.mainDiv}>
       <p className={styles.title}>{title}</p>
      <div className={styles.content}>
      {
        dataArr?.map((item, index) => {
          return <SmallCard 
                    key={index}
                    img={item.goods_img}
                    comment={item.goods_comment}
                    price={item.goods_price}
                    user_img={item.cy_User.avator}
                    id={item.id}
                    type={item.goods_type}
                />
        })
      }
      </div>
      <div className={styles.page}>
      <Pagination 
      defaultCurrent={1} 
      total={5}
      hideOnSinglePage={true} 
      pageSize={16}
      />
      </div>
     
    </div>
  )
})

export default Type
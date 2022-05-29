import React, { memo, useEffect, useState } from 'react'
import { Empty } from 'antd';
import { searchLike } from '@/service/goodsService';
import SmallCard from '@/components/tabShow/smallCard';
import styles from './index.less';

const Search = memo((props: { location: any}) => {
  const [showData, setShowData] = useState<(any)[]>();

  useEffect(() => {
    const info = props.location.query.keyword
    console.log(props.location);
    console.log(info);
    searchLike(info).then(res => {
     if(res.data.result.length!=0) {
       setShowData(res.data.result);
     }
    })
  },[])
  return (
    <div className={styles.mainDiv}>
      <div className={styles.title}>搜索结果:</div>
      {
        showData?.length === 0?  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :   
          showData?.map((item, index) => {
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
  )
})

export default Search
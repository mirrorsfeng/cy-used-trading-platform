import React, { memo, useEffect, useState } from 'react';
import { getTypeGoods } from '@/service/goodsService'; 
import portalCategory from '@/constants/category';
import SmallCard from './smallCard';
import SIcon from '../sIcon';
import styles from './index.less';
import { useHistory } from 'umi';

interface Props {
    name: string,
    type: '游戏' | '电子产品' | '生活用品' | '书籍' | '零食' | '其他', 
}

const TabShow = memo((props: Props) => {
  const [cardData, setCardData] = useState<(any)[]>([]);
  const history = useHistory();

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
    })
  },[])

  const goToType = () => {
    const type = portalCategory.find(item => {
      return item[0] === props.name
    }) as string[] ;
    history.push(`/goods/${type[1]}`);
  }
  return (
    <div className={styles.mainDiv}>
        <div className={styles.text} onClick={goToType}>
          <p>{props.name}</p>
          <SIcon stand="more"/>
        </div>
        <div className={styles.imgContent}>
          {
            cardData.map((item) => {
              return (
                <SmallCard 
                key={item.id}
                comment={item.goods_comment} 
                price={item.goods_price}
                img={item.goods_img}
                user_img={item.cy_User.avator}
                id={item.id}
                type={item.goods_type}
                />
              )
            })
          }  
        </div>
    </div>
  )
})

export default TabShow
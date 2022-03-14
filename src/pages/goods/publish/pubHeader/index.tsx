import React, { memo, useEffect } from 'react';
import { Button } from 'antd';
import SIcon from '@/components/sIcon';

import { uploadGoodsImg, uploadGoods } from '@/service/goodsService';
import { getUserInfo } from '@/service/userService';
import styles from './index.less';


type Props = {
  comment: string,
  file: any,
  type: string,
  price: any, 
}

const PubHeader = memo(( { comment, file, type, price} : Props ) => {

  const onPublish = () => {
    const formData = new FormData();
    formData.append('file', file);

    Promise.all([getUserInfo(), uploadGoodsImg(formData)]).then(res => {
        const userId = res[0].data.result.id || 0;
        const goods_img = res[1].data.result.goods_img || '';
        if(userId && goods_img) {
          const goods = {
            goods_comment: comment,
            goods_type: type,
            goods_img: goods_img,
            goods_price: price,
            goods_userId: userId,
          }
          uploadGoods(goods).then(res => {
            console.log(res);
          })
        }
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div className={styles.header}>
    <div className={styles.headerLeft}>
      <SIcon stand = 'headerLeft'/>
      <p>发布商品</p>
    </div>
    <div className={styles.headerRight}>
      <Button onClick={onPublish}>发布</Button>
    </div>
    </div>
  )
})

export default PubHeader
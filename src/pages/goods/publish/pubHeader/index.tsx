import React, { memo, useEffect } from 'react';
import { Button, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';

import { userState } from '@/store/userAtom';
import SIcon from '@/components/sIcon';
import { uploadGoodsImg, uploadGoods } from '@/service/goodsService';
import { getUserInfo } from '@/service/userService';
import styles from './index.less';
import { useHistory } from 'umi';


type Props = {
  comment: string,
  file: any,
  type: string,
  price: any, 
}

const { confirm } = Modal;

const PubHeader = memo(( { comment, file, type, price} : Props ) => {
  const history = useHistory();

  const userStateAtom = useRecoilValue(userState);

  const onPublish = () => {
    const formData = new FormData();
    formData.append('file', file);

 confirm({
    title: '确认发布宝贝?',
    okText: '确认',
    cancelText: '取消',
    icon: <ExclamationCircleOutlined />,
    onOk() {
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
           message.info('发表成功！');
           history.push('/portal');
          })
        }
    }).catch(err => {
      message.error('发送失败');
    })
    },
    onCancel() {
      console.log('Cancel');
    },
  });
  
  }

  const onBack = () => {
    history.push('/portal');
  }
  return (
    <div className={styles.header}>
    <div className={styles.headerLeft}>
      <SIcon stand = 'headerLeft'/>
      <p>发布商品</p>
    </div>
    <div className={styles.headerRight}>
      <Button onClick={onPublish}>发布</Button>
      <Button onClick={onBack}>返回</Button>
    </div>
    </div>
  )
})

export default PubHeader
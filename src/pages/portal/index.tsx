import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/store/userAtom';
import {  Carousel  } from 'antd';
import portalCategory from '@/constants/category.ts';
import { getUserInfo } from '@/service/userService';
import { getBannerImg } from '@/service/goodsService';
import { Props } from '../type';
import portalTab from '@/constants/portalTab';
import TabShow from '@/components/tabShow';
import styles from './index.less';

type bannerType = {
  img: string,
  type: string,
  id: number,
}

export default function Portal(props:Props) {

  const [userStateAtom  ,setUserStateAtom] = useRecoilState(userState);
  const [banner, setBanner] = useState<bannerType[]>([]);
  const tabClick = (e:any,tabName:string) => {
    props.history.push(`/goods/${tabName}`)
  }

  const bannerClick = (e:any, id:number, type:string) => {
    const bannerType = portalCategory.find((item:any) => {
      return item[0] === type
    })
    props.history.push(`/goods/${bannerType[1]}/${id}`);
  }

  useEffect(() => {
    if(!userStateAtom.hasOwnProperty('id')) {
    getUserInfo().then(res => {
      const user = { ...res.data.result }
      setUserStateAtom(user);
    })
  }
    getBannerImg().then(res => {
      setBanner([...res.data]);
    })
  },[])
 
  return (
    <div className={styles.mainDiv}>
      <div className={styles.bodyDiv}>
        <div className={styles.bodyContent}>
        <div className={styles.bannerBody}>
          <div className={styles.banner}>
          <p>今日上新</p>
        <Carousel autoplay className={styles.carousel}>
          {
            banner.map((item:bannerType,index:any) => {
              return (
                <div key={index}  className={styles.bannerImg} onClick={(e) => bannerClick(e,item.id, item.type)}>
                  <img src={`http://localhost:8080${item.img}`} alt="" />
                </div>
              )
            })
          }
        </Carousel>
        </div>
        <div className={styles.categoryDiv}>
          <p className={styles.categoryText}>分类</p>     
        <div className={styles.category}>
          {
            portalCategory.map((item:string[] ,index: number) => {
              return (
                <div key={index} className={styles.categoryIcon} onClick={(e) => tabClick(e,item[1])}>
                  <img src={require(`@/assets/img/${item[0]}.png`)} alt="" />
                  <p>{item[0]}</p>
                </div>
              )
            })
          }
        </div>
        </div>
        </div>
        <div className={styles.imgContent}>
       {
         portalTab.map((item) => {
           return (
            <TabShow key={item} name={item} type={item as ('游戏' | '电子产品' | '生活用品' | '书籍' | '零食' | '其他')} />
           )
         })
       }
        </div>
        </div>
      </div>
    </div>
  );
}

import {  Carousel  } from 'antd';
import portalCategory from '@/constants/category.ts';
import { Props } from '../type';
import portalTab from '@/constants/portalTab';
import TabShow from '@/components/tabShow';
import styles from './index.less';

export default function Portal(props:Props) {

  const tabClick = (e:any,tabName:string) => {
    props.history.push(`/goods/${tabName}`)
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.bodyDiv}>
        <div className={styles.bodyContent}>
        <div className={styles.bannerBody}>
          <div className={styles.banner}>
          <p>今日上新</p>
        <Carousel autoplay className={styles.carousel}>
          <div>
            <h3 style={{"height": '260px', "lineHeight": '260px', "background": '#364d79'}}>1</h3>
          </div>
          <div>
            <h3 style={{"height": '260px', "lineHeight": '260px', "background": '#364d79'}}>2</h3>
          </div>
          <div>
            <h3 style={{"height": '260px', "lineHeight": '260px', "background": '#364d79'}}>3</h3>
          </div>
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

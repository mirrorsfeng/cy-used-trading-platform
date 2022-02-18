import { Input, Dropdown, Menu, Carousel  } from 'antd';

import SIcon from '@/components/sIcon';
import portalCategory from '@/constants/category';
import styles from './index.less';


const { Search } = Input;

const userMenu = (
  <Menu>
    <Menu.Item key="userCenter">
      <p>个人中心</p>
    </Menu.Item>
    <Menu.Item key="grounding">
      <p>发布上架</p>
    </Menu.Item>
  </Menu>
)

export default function Portal() {

  const onSearch = () => {
    console.log("search");
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.header}>
      <div className={styles.headerLeft}>
        <SIcon stand = 'headerLeft'/>
        <p>CY-TRADING</p>
      </div>
      <Search placeholder="搜索你想要的"
              onSearch={onSearch} 
              enterButton
              className={styles.searchInput} 
      />
      <div className={styles.headerRight}>
        <Dropdown overlay={userMenu} placement='bottomLeft'>
          <div>
        <SIcon stand = 'userIcon'/>
        </div>
        </Dropdown>
        
      </div>
      </div>
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
            portalCategory.map((item:string ,index: number) => {
              return (
                <div key={index} className={styles.categoryIcon}>
                  <img src={require(`@/assets/img/${item}.png`)} alt="" />
                  <p>{item}</p>
                </div>
              )
            })
          }
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

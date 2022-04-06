import React, { memo } from 'react';
import { Input, Dropdown, Menu, Carousel  } from 'antd';
import { History } from '../../type';
import SIcon from '@/components/sIcon';
import styles from './index.less';

const { Search } = Input;



const Header = ({history} : {history:History}) => {

  const handleMenuClick = (e:any) => {
    switch(e.key) {
      case 'quit':
        localStorage.removeItem('token');
        location.reload();
        break;
      case 'grounding': 
        history.push('/goods/publish');
        break;
      case 'userCenter':
        history.push('/user');
        break;
      default:
        break;
    }
}

const userMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="userCenter">
      <p>个人中心</p>
    </Menu.Item>
    <Menu.Item key="grounding">
      <p>发布上架</p>
    </Menu.Item>
    <Menu.Item key="quit">
      <p>退出登录</p>
    </Menu.Item>
  </Menu>
)
  const onSearch = () => {
    console.log("search");
  }

  const onHeaderIcon = () => {
      history.push('/portal');
  }

  return (
    <div className={styles.header}>
    <div className={styles.headerLeft} onClick={onHeaderIcon} >
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
  )
}

export default Header
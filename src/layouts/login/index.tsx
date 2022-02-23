import React, { memo, useState } from 'react';
import { Input, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { loginAuth } from '@/service/loginAuth';
import styles from './index.less';

interface Props  {
   history: { push: Function },
}

export default memo(function Login({ history } : Props) {

 const [isModalVisible, setIsModalVisible] = useState(false);
 const [userName, setUserName] = useState('');
 const [password, setPassword] = useState('');

 const nameOnchange = (e) => {
   setUserName(e.target.value);
 }

 const passwordOnchange = (e) => {
    setPassword(e.target.value);
 }
 const handleOk = () => {
    setIsModalVisible(false);
 }

 const showModal = () => {
    setIsModalVisible(true);
  };

 const handleCancel = () => {
    setIsModalVisible(false);
 }

 const loginIn = () => { 
    console.log(userName);
    console.log(password);
    loginAuth(userName, password).then(res => {
       localStorage.setItem('token', res.data.result.token);
    })
 }
  return(
  <> 
  <div className={styles.bg} >
          <div className={styles.loginDiv}>
              <div className={styles.loginText}>平台登陆</div> 
          <Input placeholder="请输入用户名" className={styles.userId} prefix={<UserOutlined />} value={userName} onChange={nameOnchange} />
          <Input.Password placeholder="输入密码" className={styles.userId} value={password} onChange={passwordOnchange} />
          <div className={styles.text}>
              <p className={styles.textLeft} >忘记密码</p>
              <p className={styles.textRight} onClick = {showModal}>注册</p>
          </div>
          <Button type="primary" className={styles.btn} onClick={loginIn}>登录</Button>
          </div>
        </div>;
        <Modal title="注册账号" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        maskClosable={false}
        okText="确认"
        cancelText="取消"
        width="400px"
        >
           <div className={styles.agisterDiv}><p>用户名</p><Input placeholder="请输入用户名" className={styles.agisterInput} /></div>
           <div className={styles.agisterDiv}><p>密码</p><Input.Password placeholder="输入密码" className={styles.agisterInput} /></div>
           <div className={styles.agisterDiv}><p>确认密码</p><Input.Password placeholder="再次输入密码" className={styles.agisterInput} /></div>
        
      </Modal>
 </>
  )
});

import React, {  useEffect, useState } from 'react';
import { Input, Button, Modal, Form,  message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { loginAuth } from '@/service/userService';
import Register from './register';
import { History } from '../type';
import styles from './index.less';
import './ant.less';


interface Props  {
   history: History,
}

export default function Login({ history } : Props) {

 const [isModalVisible, setIsModalVisible] = useState(false);



 const showModal = () => {
    setIsModalVisible(true);
  };

 

 const onFinish = (values: any) => {
      const {username, password} = values;
        loginAuth(username, password).then((res:any) => {
       localStorage.setItem('token', res.data.result.token);
       history.push('/portal');
    }).catch((err:any) => {
         message.error("用户名或密码错误!")
    })

 }


 
 useEffect(() => {
   history.replace('/login');
 },[])

  return(
  <> 
  <div className={styles.bg} >
          <div className={styles.loginDiv}>
              <div className={styles.loginText}>平台登陆</div> 
          <Form onFinish={onFinish} className={styles.loginForm}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder="请输入用户名" className={styles.userId} prefix={<UserOutlined />}  />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="输入密码" className={styles.userId} />
          </Form.Item>
          <Form.Item>
          <div className={styles.text}>
              <p className={styles.textLeft} >忘记密码</p>
              <p className={styles.textRight} onClick = {showModal}>注册</p>
          </div>
          </Form.Item>
          <Form.Item>
          <Button type="primary" className={styles.btn} htmlType="submit" /* onClick={loginIn} */>登录</Button>
          </Form.Item>
          </Form>
          </div>
          
        </div>;
       <Register setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
 </>
  )
};

import React, { memo, useEffect, useState } from 'react'
import { Button, Descriptions, Modal } from 'antd';
import styles from './index.less';
import { getUserInfo } from '@/service/userService';
const Operate = memo(() => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const changePassword = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    console.log(111);
  }
  useEffect(() => {
    getUserInfo().then(res => {
      setUserName(res.data.result.user_name);
      setEmail(res.data.result.email);
    })
  })
  return (
    <div className={styles.mainDiv}>
      <div className={styles.info}>
  <Descriptions title="用户信息"  bordered>
    <Descriptions.Item label="用户名">{userName}</Descriptions.Item>
    <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
  </Descriptions>
  </div>
  <div className={styles.btn}>
    <Button type="primary" onClick={changePassword}>修改密码</Button>
  </div>
  <Modal title="修改用户密码" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
  </Modal>
    </div>
  )
})

export default Operate
import React, { ReactElement, useRef, useState } from 'react';
import { Input, Button, Modal, message } from 'antd';
import { verifyEmail } from '@/service/userService';
import "./index.less";

type Props = {
    isModalVisible: boolean, 
    setIsModalVisible: Function,
}

const Register : (props:Props) => ReactElement = ({ isModalVisible, setIsModalVisible } : Props) => {
   const [usernameValue, setUsernameValue] = useState('');
   const [passwordValue, setPasswordValue] = useState('');
   const [checkPasswordValue, setCheckPasswordValue] = useState('');
   const [email, setEmail] = useState('');
   const [checkCode, setCheckCode] = useState('');

   const btnRef = useRef<HTMLInputElement>(null);

 const handleOk = () => {
    setIsModalVisible(false);
 }

 const handleCancel = () => {
    setIsModalVisible(false);
    setUsernameValue('');
    setCheckCode('');
    setCheckPasswordValue('');
    setEmail('');
    setPasswordValue('');
 }
    // const usernameOnBlur = (_:any) => {
    //     const value = _.target.value;
    //     if(!value){
    //       _.target.style.borderColor = 'red';
    //       message.error('用户名不能为空');
    //     }else {
    //         _.target.style.borderColor = '#d9d9d9';
            
    //     }
    //   }

 

 const sendEmail = () => {
    let time = 60;
    verifyEmail(email).then(res => {
        console.log(res);
    })
    const timer = setInterval(() => timeBack(), 1000);
    function timeBack() {
        if(time !== 0) {
        //    setTime(time-1);
            --time;
            btnRef.current!.disabled  = true;
            btnRef.current!.innerHTML = `${time}`;
        }else {
            btnRef.current!.disabled  = false;
            btnRef.current!.innerHTML = "发送";
            clearInterval(timer);
        }
    } 
 }

    
    const onNameChange = (e:any) => {
        setUsernameValue(e.target.value);
    }
    const onPasswordChange = (e:any) => {
        setPasswordValue(e.target.value);
    }
    const onCheckPasswordChange = (e:any) => {
        setCheckPasswordValue(e.target.value);
    }
    const onEmailChange = (e:any) => {
        setEmail(e.target.value);
    }
    const onCheckCodeChange = (e:any) => {
        setCheckCode(e.target.value);
    }

    const onCheckPasswordBlur = (_:any) => {
       const value = _.target.value;
       if(value !== passwordValue) {
        _.target.parentNode.style.borderColor = "red";
        message.error('两次密码不一致');
       }else {
        _.target.parentNode.style.borderColor = "#d9d9d9";
       }
    }

    
  return (
    <>
        <Modal title="注册账号" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        maskClosable={false}
        okText="确认"
        cancelText="取消"
        width="400px"
        >
           <div className="registerDiv">
               <p>用户名</p>
               <Input
                placeholder="请输入用户名" 
                className="register-input" 
                // onBlur={usernameOnBlur} 
                value={usernameValue}
                onChange={onNameChange}
                />
            </div>
           <div className="registerDiv">
            <p>密码</p>
            <Input.Password 
            placeholder="输入密码" 
            className="register-input" 
            value={passwordValue}
            onChange={onPasswordChange}
            />
            </div>
           <div className="registerDiv">
            <p>确认密码</p>
            <Input.Password 
            placeholder="再次输入密码" 
            className="register-input"
            value={checkPasswordValue}
            onChange={onCheckPasswordChange} 
            onBlur={onCheckPasswordBlur}
            />
            </div>      
           <div className="registerDiv">
            <p>邮箱地址</p>
            <Input 
            placeholder="输入您的邮箱" 
            className="email-input"
            value={email} 
            onChange={onEmailChange}
            />
            <Button type="primary" className="email-btn" onClick={sendEmail} ref={btnRef}>发送</Button>
            </div>    
            <div className="registerDiv">
            <p>验证码</p>
            <Input 
            placeholder='邮箱验证码' 
            className="register-input"
            value={checkCode}
            onChange={onCheckCodeChange}
            />
            </div>

            </Modal>
    </>
 )
}

export default Register
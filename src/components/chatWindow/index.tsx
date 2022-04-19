import React, { memo, useState } from 'react'
import { Modal, Button } from 'antd';
import ChatContent from './chatContent';

type Props = {
    chatIsShow: boolean,
    setChatIsShow: Function,
}
const ChatWindow = memo((props: Props) => {
   
    const closeModal = () => {
        props.setChatIsShow(false);
    }
  return (  
    <Modal  title="Basic Modal" 
            visible={props.chatIsShow} 
            footer={null} 
            onCancel={closeModal}
            bodyStyle={{padding: '0px'}}
            maskClosable={false}
    >
        <ChatContent />
    </Modal> 
  )
})

export default ChatWindow
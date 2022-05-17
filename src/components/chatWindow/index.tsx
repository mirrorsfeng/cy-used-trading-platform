import React, { memo, useEffect, useState } from 'react'
import { Modal, Button } from 'antd';
import ChatContent from './chatContent';

type Props = {
    chatIsShow: boolean,
    setChatIsShow: Function,
    chatName: string,
    otherAvator: string,
}
const ChatWindow = memo((props: Props) => {
   
    const closeModal = () => {
        props.setChatIsShow(false);
    }

  return (  
    <Modal  title={props.chatName}
            visible={props.chatIsShow} 
            footer={null} 
            onCancel={closeModal}
            bodyStyle={{padding: '0px'}}
            maskClosable={false}
    >
        <ChatContent chatName={props.chatName} otherAvator={props.otherAvator} />
    </Modal> 
  )
})

export default ChatWindow
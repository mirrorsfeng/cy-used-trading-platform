import React, { memo, useState } from 'react'
import { Button, Input } from 'antd';
import Message from './message';
import styles from './index.less';

type MessageObj = {
    avator: string,
    content: string,
    user: string
}

const { TextArea } = Input;
const ChatContent = memo(() => {
    const [inputValue, setInputValue] = useState<string>('');
    const [messageArr, setMessageArr] = useState<MessageObj[]>([]);


    const onInputChange = (e:any) => {
       setInputValue(e.target.value)
    }

    const sendMessage = () => {
        const obj = {
            avator: '',
            content: inputValue,
            user: 'me'
        }
        const newArr = [...messageArr, obj];
        setMessageArr(newArr);
        setInputValue('');
    }
  return (
    <div className={styles.mainDiv}>
    <div className={styles.message}>
        {
            messageArr.map((item,index) => {
                return (
                    <div key={index} className={styles.mes}>
                        <Message avator={item.avator} content={item.content} user={item.user} />
                    </div>
                )
            })
        }
    </div>
    <div className={styles.sendDiv}>
        <TextArea onChange={onInputChange}  
                  autoSize={{ minRows: 3, maxRows: 5 }} 
                  bordered={false}
                  value={inputValue}

        />
        <div className={styles.btn}>
        <Button type="primary" onClick={sendMessage} >发  送</Button>
        </div>
    </div>
    </div>
  )
})

export default ChatContent
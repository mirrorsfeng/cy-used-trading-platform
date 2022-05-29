import React, { Component } from 'react';
import { Dropdown, Menu, Avatar, Badge  } from 'antd';
import { connect } from 'umi';
import { MessageFilled, UserOutlined } from '@ant-design/icons';
import { getChatList, getNotRead } from '@/service/chatService';
import styles from './index.less';
import ChatWindow from '../chatWindow';

class ChatIcon extends Component<any,any> {
    constructor(props:any) {
        super(props);
        const ws = new WebSocket(
            `ws:localhost:8080?${localStorage.getItem('user_name')}`,
          );
          ws.onopen = () => {
            console.log('连接成功');
          };
          ws.onmessage = (e) => {
            const data = e.data.split('-');
            const info = {
              name: data[1],
              content: data[0],
              id: data[2],
            }
            props.addChatList(info);
            const obj = {
              user_name: data[1],
              avator: null
            };
          
           getNotRead(localStorage.getItem('user_name') as string).then(res => {
            this.setState({
              notReadList: [...res.data]
            })
           })
          };

          
        props.createWs(ws);
        this.state = {
            ws: ws,
            notReadList: [],
            chatIsShow:false,
            clickAvator: '',
            clickName: '',
            mainRef: React.createRef(),
        }
     
    }

    componentDidMount() {
      getNotRead(localStorage.getItem('user_name') as string).then(res => {
        this.setState({
          notReadList: [...res.data]
        })
      })
    }
  render() {
      const menu = (
          <Menu onClick={(e) => this.clickChatWindow(e)} items={this.state.notReadList.map((item:any,index:any) => {
            return {
              label: (
                <div className={styles.userInfo}>
                  <div>
                   {
                item.avator?  <Badge dot> <Avatar size={35} src={`http://localhost:8080/${item.avator}`} /> </Badge>:
                            <Badge dot> <Avatar size={35} icon={<UserOutlined />} /> </Badge>
            }
                </div>
                <p>{item.user_name}</p>
                </div>
              ),
              key: `${index}`
            }
          })} />
      )
    return (
      <div className={styles.mainDiv} ref={this.state.mainRef}>
        <Badge dot={this.state.notReadList.length === 0? false:true}>
          <Dropdown overlay={menu} trigger={['click']} placement="topLeft">
          <MessageFilled style={{fontSize: '35px', color: '#3498db'}} />
          </Dropdown>
        </Badge>
       <ChatWindow
                                 chatIsShow={this.state.chatIsShow}
                                 setChatIsShow={this.changeShow}
                                 chatName={this.state.clickName}
                                 otherAvator={this.state.clickAvator}
                               
       />
      </div>
    )
  }

  clickChatWindow = (e:any) => {
    const key = parseInt(e.key);
    const obj = this.state.notReadList[key];
    const arr = this.state.notReadList;
    arr.splice(key,1);
    this.setState({
      clickName: obj.user_name,
      clickAvator: obj.avator,
      chatIsShow: true,
      notReadList: arr
    }) 
  }

  changeShow = (type:boolean) => {
    this.setState({
      chatIsShow: type,
    })
  }
}

const actionCreator = {
    createWs: (payload:any) => ({type: 'store/createWs', payload}),
    addChatList: (payload:any) => ({type: 'store/addChatList', payload})
}

export default connect((state:any) => ({ws: state.store.ws}), actionCreator)(ChatIcon)
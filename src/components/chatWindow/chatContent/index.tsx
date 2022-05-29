import React,{ Component} from 'react';
import { Button, Input } from 'antd';
import Message from './message';
import { changeRead, getChatList } from '@/service/chatService';
import { connect } from 'umi';
import styles from './index.less';

const { TextArea } = Input;
class ChatContent extends Component<any, any> {
  constructor(props: { chatName: string; otherAvator: string; ws: WebSocket }) {
    super(props);
    // const ws = new WebSocket(
    //   `ws:localhost:8080?${localStorage.getItem('user_name')}`,
    // );
    // props.ws.onopen = () => {
    //   console.log('连接成功');
    // };
    // props.ws.onmessage = (e) => {
    //   const dataList = e.data.split('-');
    //   const obj = {
    //     avator: this.props.otherAvator,
    //     content: dataList[0],
    //     user: 'other',
    //   };
    //   const newArr = [...this.state.messageArr, obj];
    //   this.setState({
    //     messageArr: newArr,
    //   });
    // };
    
    
    this.state = {
      inputValue: '',
      messageArr: [],
      ws: props.ws,
      messageRef: React.createRef(),
      myAvator: localStorage.getItem('avator'),
      chatList: []
    };
   
  }

  componentDidMount() {
    const myName = localStorage.getItem('user_name') as string;
    getChatList(myName, this.props.chatName).then((res) => {
      
      const newData = res.data.result.map((item: any) => {
        if(!item.isread) {
          changeRead(item.id).then(res => {
           
          })
        }
        if (item.user_name === myName) {
          item.user = 'me';
          item.avator = localStorage.getItem('avator') as string;
        } else {
          item.user = 'other';
          item.avator = this.props.otherAvator;
        }
        return item;
      });
      this.setState({
        messageArr: newData,
      });
    });
  }


  static getDerivedStateFromProps(props:any, state:any) {
    const { chatList, chatName, otherAvator } = props;
    for(let i=0;i<chatList.length;i++) {
      if(chatList[i].name === chatName) {
        if(state.chatList.length === 0 || (state.chatList.length != 0 && chatList[i].content !== state.chatList[0])){
          changeRead(chatList[i].id).then(res => {
           
          })
        return {
          ...state,
          messageArr:[...state.messageArr, {
            user:chatName,
            avator: otherAvator,
            content: chatList[i].content
          }],
          chatList: [chatList[i].content],
        }
      }
      }
    }
    return null
  }
  componentDidUpdate() {
   this.state.messageRef.current.scrollTop = this.state.messageRef.current.scrollHeight;
  }

  render() {
    return (
      <div className={styles.mainDiv}>
        <div className={styles.message} ref={this.state.messageRef}>
          {this.state.messageArr.map((item: any, index: any) => {
            return (
              <div key={index} className={styles.mes}>
                <Message
                  avator={item.avator}
                  content={item.content}
                  user={item.user}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.sendDiv}>
          <TextArea
            onChange={(e) => this.onInputChange(e)}
            autoSize={{ minRows: 3, maxRows: 5 }}
            bordered={false}
            value={this.state.inputValue}
          />
          <div className={styles.btn}>
            <Button type="primary" onClick={() => this.sendMessage()}>
              发 送
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onInputChange = (e: any) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  sendMessage() {
    const obj = {
      avator: this.state.myAvator,
      content: this.state.inputValue,
      user: 'me',
    };

    this.state.ws.send(`${this.state.inputValue}/${this.props.chatName}`);
    this.setState({
      messageArr: [...this.state.messageArr, obj],
      inputValue: ''
    });
  }
}
// const ChatContent = memo(
//   ({ chatName, otherAvator }: { chatName: string; otherAvator: string }) => {
//     const [inputValue, setInputValue] = useState<string>('');
//     const [messageArr, setMessageArr] = useState<MessageObj[]>([]);
//     const ws = useRef<WebSocket | null>(null);

//     const webSocketInit = useCallback(() => {

//         if (!ws.current) {
//           ws.current = new WebSocket(`ws:localhost:8080?${localStorage.getItem('user_name')}`);
//           ws.current.onopen = () => {
//               console.log('连接成功');
//           }
//           ws.current.onmessage = (e) => {
//             const obj = {
//                 avator: otherAvator,
//                 content: e.data,
//                 user: 'other',
//               };
//             const newArr = [...messageArr, obj];
//             setMessageArr(newArr);
//           }
//         }
//       }, [ws]);

//     const onInputChange = (e: any) => {
//       setInputValue(e.target.value);
//     };

//     const sendMessage = () => {
//       const obj = {
//         avator: '',
//         content: inputValue,
//         user: 'me',
//       };
//       const newArr = [...messageArr, obj];
//       ws.current?.send(`${inputValue}/${chatName}`);
//       setMessageArr(newArr);
//       setInputValue('');

//     };

//     useEffect(() => {
//       const myName = localStorage.getItem('user_name') as string;
//       getChatList(myName, chatName).then((res) => {
//         const newData = res.data.result.map((item: any) => {
//           if (item.user_name === myName) {
//             item.user = 'me';
//             item.avator = localStorage.getItem('avator') as string;
//           } else {
//             item.user = 'other';
//             item.avator = otherAvator;
//           }
//           return item;
//         });
//         setMessageArr(newData);
//       });
//       webSocketInit()

//     }, []);

//     return (
//       <div className={styles.mainDiv}>
//         <div className={styles.message}>
//           {messageArr.map((item, index) => {
//             return (
//               <div key={index} className={styles.mes}>
//                 <Message
//                   avator={item.avator}
//                   content={item.content}
//                   user={item.user}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className={styles.sendDiv}>
//           <TextArea
//             onChange={onInputChange}
//             autoSize={{ minRows: 3, maxRows: 5 }}
//             bordered={false}
//             value={inputValue}
//           />
//           <div className={styles.btn}>
//             <Button type="primary" onClick={sendMessage}>
//               发 送
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   },
// );

export default connect((state:any) => ({ws:state.store.ws, chatList: state.store.chatList}))(ChatContent);

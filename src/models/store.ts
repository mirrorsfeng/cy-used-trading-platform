export default {
    namespace: 'store',

    state: {
        ws: '',
        chatList: [],
    },

    reducers: {
        createWs(state: { [propName : string] : any}, action: { [propName: string]:any} ) {
            state.ws = action.payload;
            return {...state}
        },
        addChatList(state: { [propName : string] : any}, action: { [propName: string]:any} ) {
            let stand = 0;
            const list = [...state.chatList];
            for(let i=0;i<list.length; i++) {
                if(list[i].name = action.payload.name) {
                    stand = 1;
                    list[i].content = action.payload.content;
                    break;
                }  
            }
            if(!stand) {
                list.push(action.payload);
            }
            state.chatList = list;
            return {...state}
        }
    }
}
import { atom } from 'recoil';

const wsState = atom({
    key: 'wsState',
    default: WebSocket,
})


export  {
    wsState
}
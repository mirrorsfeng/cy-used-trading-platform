import { AxiosPromise } from "axios";
import instance from "./request";


export const getChatList: (user_name: string, toUser_name:string) => AxiosPromise = (user_name: string, toUser_name:string) => {
    return instance({
        url: '/chat',
        params: {
            user_name,
            toUser_name
        }
    })
}

export const getNotRead: (name: string) => AxiosPromise = (name: string) => {
    return instance({
        url: '/chat/noread',
        params: {
            name
        }
    })
}

export const changeRead: (id: number) => AxiosPromise = (id:number) => {
    return instance({
        url: '/chat',
        method: 'put',
        data: {
            id
        }
    })
}
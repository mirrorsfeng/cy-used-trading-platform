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
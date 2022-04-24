import { AxiosPromise } from 'axios';
import instance from './request';


export const uploadComment : (content: string, user_id: number, goods_id: number) => AxiosPromise = (content: string, user_id: number, goods_id: number)  => {
    return instance({
        method: 'post',
        url: '/comment',
        data: {
            content,
            user_id,
            goods_id,
        }
    })
}

export const getComment : (id : number) => AxiosPromise = (id :number) => {
    return instance({
        url: `/comment/${id}`
    })
}
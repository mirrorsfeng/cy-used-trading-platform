import { AxiosPromise } from 'axios';
import instance from './request';

export const createCollect : (user_id: number, goods_id: number) => AxiosPromise = (user_id: number, goods_id: number) => {
    return instance({
        method: 'post',
        url: '/collect',
        data: {
            user_id,
            goods_id,
        }
    })
}

export const getUserCollect : (userId: number) => AxiosPromise = (userId: number) => {
    return instance({
        url: '/collect/goods',
        params: {
            userId
        }
    })
}

export const deleteCollect: (user_id: number, goods_id: number) => AxiosPromise = (user_id: number, goods_id: number) => {
    return instance({
        url: '/collect',
        method: 'put',
        data: {
            user_id,
            goods_id
        }
    })
}

export const getUserAllGoods: (userId: number) => AxiosPromise = (userId: number) => {
    return instance({
        url: '/collect/goods/detail',
        params: {
            userId
        }
    })
}
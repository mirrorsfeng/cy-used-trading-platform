import { AxiosPromise } from 'axios';
import instance from './request';

type goodsType = {
    goods_comment: string,
    goods_price: number,
    goods_type: string,
    goods_img: string,
    goods_userId: number,
}

export const getTypeGoods : (type:string, num?:number) => AxiosPromise = (type:string, num?:number) => {
    return instance({
        url: `/goods/${type}`,
        params: {
            num,
        }
    })
}

export const uploadGoodsImg : (file:any) => AxiosPromise = (file:any) => {
    return instance({
        method: 'post',
        url: '/goods/upload',
        data: file
    })
}

export const uploadGoods: (goodsData : goodsType) => AxiosPromise = (goodsData:goodsType) => {
    return instance({
        method: 'post',
        url: '/goods',
        data: goodsData
    })
}

export const getGoods : (id : number) => AxiosPromise = (id : number) => {
    return instance({
        url: `/goods/detail/${id}`
    })
}

export const getBannerImg : () => AxiosPromise = () => {
    return instance({
        url: '/goods/banner/img',
    })
}

export const searchLike: (keywords: string) => AxiosPromise = (keywords: string) => {
    return instance({
        url: '/goods/selectAll/like',
        params: {
            keywords
        }
    })
} 

export const deleteGoods: (id:number) => AxiosPromise = (id: number) => {
    return instance({
        url: '/goods/delete',
        method: 'post',
        data: {
            id
        }
    })
}

export const getMyGoods: (userId: number) => AxiosPromise = (userId: number) => {
    return instance({
        url: '/goods/my/goods',
        params: {
            userId
        }
    })
}
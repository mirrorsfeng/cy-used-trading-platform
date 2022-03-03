import { AxiosPromise } from 'axios';
import instance from './request.ts';

export const loginAuth : (user_name:string, passWord: string ) => AxiosPromise = (user_name:string, passWord: string ) => {
    return instance({
        method: 'post',
        url: '/users/login',
        data: {
            user_name,
            passWord,
        }
    })
}

export const register : (user_name:string, passWord: string, emali: string, code: number) => AxiosPromise = (user_name:string, passWord: string, emali: string, code: number) => {
    return instance({
        method: 'post',
        url: '/users/register',
        data: {
            user_name,
            passWord,
            emali,
            code
        }
    })
}

export const verifyEmail : (email: string) => AxiosPromise = (email:string) => {
    return instance({
        method: 'post',
        url: '/email',
        data: {
            email
        }
    })
}
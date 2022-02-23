import instance from './request';

export const loginAuth : Function = (user_name:string, passWord: string ) => {
    return instance({
        method: 'post',
        url: '/users/login',
        data: {
            user_name,
            passWord,
        }
    })
}
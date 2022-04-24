import { history } from 'umi';
import { getUserInfo } from './service/userService';

export function render(oldRender:any) {
  getUserInfo().then(res => {
    // if(localStorage.length<3) {
    // localStorage.setItem('id', res.data.result.id);
    // localStorage.setItem('user_name', res.data.result.user_name);
    // localStorage.setItem('avator', res.data.result.avator);
    // }
   oldRender() 
  }).catch(err => {
    localStorage.clear();
    history.push('/login'); 
    oldRender()
  });
}



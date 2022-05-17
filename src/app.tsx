import { history } from 'umi';
import { getUserInfo } from './service/userService';

export function render(oldRender:any) {
  getUserInfo().then(res => {
   oldRender() 
  }).catch(err => {
    localStorage.clear();
    history.push('/login'); 
    oldRender()
  });
}



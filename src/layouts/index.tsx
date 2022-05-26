import React, { memo, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import Login from './login';
import Header from './components/header';
import { getUserInfo } from '@/service/userService';
import { History } from './type';
import ChatIcon from '@/components/chatIcon';
function Layouts(props:{location:any, history:History, children:any}) {
    const token = localStorage.getItem('token');

    if(!token)
    {
    return (
       <>
       <RecoilRoot>
      <Login history={props.history} location={location} />
      </RecoilRoot>
       </>
    )
    }
    else if(location.pathname === '/goods/publish') {
        return (
        <>
        <RecoilRoot>
        { props.children }
        </RecoilRoot>
        </>
        )
    }
    else {
        return (
            <>
            <RecoilRoot>
            <Header history={props.history} />
           { props.children }
           <ChatIcon />
           </RecoilRoot>
            </>
            )
    }
}

export default Layouts;



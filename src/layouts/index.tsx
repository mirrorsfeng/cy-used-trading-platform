import React, { memo } from 'react';
import Login from './login';
import Header from './components/header';
import { History } from './type';
function Layouts(props:{location:any, history:History, children:any}) {
    const token = localStorage.getItem('token');
    if(!token)
    {
    return (
       <>
      <Login history={props.history} location={location} />
       </>
    )
    }
    else if(location.pathname === '/goods/publish') {
        return (
        <>
        { props.children }
        </>
        )
    }
    else {
        return (
            <>
            <Header history={props.history} />
           { props.children }
            </>
            )
    }
}

export default Layouts;



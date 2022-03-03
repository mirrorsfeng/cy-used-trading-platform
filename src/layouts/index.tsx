import React, { memo } from 'react';
import Login from './login';
import { History } from './type';
function Layouts(props:{location:any, history:History, children:any}) {
    const token = localStorage.getItem('token');
    if(!token)
    {
    return (
       <>
      <Login history={props.history}/>
       </>
    )
    }
    else {
        return props.children
    }
}

export default Layouts;



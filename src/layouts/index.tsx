import React, { memo } from 'react';
import Login from './login';
import instance from '../service/request';
function Layouts(props:{location:any, history:object, children:any}) {
    const token = localStorage.getItem('token');
    if(!token)
    return (
       <>
      <Login history={props.history}/>
       </>
    )
    else {
        return props.children
    }
}

export default Layouts;
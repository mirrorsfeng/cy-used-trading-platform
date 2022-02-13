import React, { memo } from 'react';
import Login from './login';
function Layouts(props:{location:any, history:object, children:any}) {
if(props.location.pathname === '/' || props.location.pathname === '/login')
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
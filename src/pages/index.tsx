import React, { memo, useEffect } from 'react';
import { Props } from './type';

export default memo(function Main(props:Props) {

  useEffect(() => {
    props.history.push('/portal');
  })
  
  return <div>222</div>;

});

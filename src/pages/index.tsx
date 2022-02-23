import React, { memo, useEffect } from 'react';

export default memo(function index({history}) {

  useEffect(() => {
    history.push('/portal');
  })
  
  return <div>222</div>;

});

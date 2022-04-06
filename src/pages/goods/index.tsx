import React, { memo, useEffect } from 'react'
import { Redirect } from 'umi'
import { Props } from '../type'
const Goods = memo((props : Props) => {

    // useEffect(() => {
    //     props.history.push('/goods/technology')
    // },[])
  return <Redirect to='/goods/technology' />
})

export default Goods
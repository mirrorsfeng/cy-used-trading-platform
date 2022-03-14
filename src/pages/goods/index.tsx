import React, { memo, useEffect } from 'react'
import { Props } from '../type'
const Goods = memo((props : Props) => {

    useEffect(() => {
        props.history.push('/goods/technology')
    },[])
  return (
    <div>Goods</div>
  )
})

export default Goods
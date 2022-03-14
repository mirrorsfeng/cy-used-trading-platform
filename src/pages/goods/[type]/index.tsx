import React, { memo, useEffect, useState } from 'react'
import { Props } from '@/pages/type';
import styles from './index.less';

const Type = memo(({location}:Props) => {
    const [dataArr, setDataArr] = useState<(any)[]>();

    useEffect(() => {
      const path = location.pathname.split('/');
      console.log(path);
    },[]);
  return (
    <div className={styles.mainDiv}>

    </div>
  )
})

export default Type
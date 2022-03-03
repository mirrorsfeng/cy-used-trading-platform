import React, { memo } from 'react';
import styles from './index.less';

interface Props {
    name: string,
}

const TabShow = memo((props: Props) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.text}>{props.name}</div>
        <div className={styles.imgContent}></div>
    </div>
  )
})

export default TabShow
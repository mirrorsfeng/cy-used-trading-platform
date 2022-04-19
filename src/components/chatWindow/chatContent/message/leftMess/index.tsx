import React, { memo } from 'react';
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';

type Props = {
    avator: string,
    content: string
}
const LeftMess = memo(({avator, content}: Props) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.avator}>
            {
                avator?  <Avatar size={35} src="https://joeschmoe.io/api/v1/random" /> :
                            <Avatar size={35} icon={<UserOutlined />} />
            }
        </div>
        <div className={styles.content}>
            <p>{content}</p> 
        </div>
    </div>
  )
})

export default LeftMess
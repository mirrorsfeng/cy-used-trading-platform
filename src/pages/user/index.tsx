import React, { memo } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/userAtom';


import styles from './index.less';

const User = memo(() => {
    const userStateAtom = useRecoilValue(userState);
  return (
    <div className={styles.mainDiv}>
        <div className={styles.userAva}>
            <div className={styles.info}>
            <Avatar size={58} icon={<UserOutlined />} />
            <div className={styles.name}>{(userStateAtom as { user_name:string }).user_name}</div>
            </div>
        </div>
    </div>
  )
})

export default User
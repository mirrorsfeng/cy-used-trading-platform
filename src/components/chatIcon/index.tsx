import React, { Component } from 'react';
import { Dropdown, Menu } from 'antd';
import { MessageFilled } from '@ant-design/icons';
import styles from './index.less';
export default class ChatIcon extends Component {
    constructor(props:any) {
        super(props);
    }

  render() {
      const menu = (
          <Menu items={[
              {
                  label: (
                      <p>22222</p>
                  ),
                  key: '1',
              }
          ]} />
      )
    return (
      <div className={styles.mainDiv}>
          <Dropdown overlay={menu} trigger={['click']} placement="topLeft">
          <MessageFilled style={{fontSize: '35px', color: '#3498db'}} />
          </Dropdown>
      </div>
    )
  }
}

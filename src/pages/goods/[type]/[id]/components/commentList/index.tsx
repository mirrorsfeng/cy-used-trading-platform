import React from "react";
import { Comment, List, } from 'antd';

const CommentList = ({ comments } : { comments : any}) => (
    <List
      dataSource={comments}
      header={`${comments.length} 条评论`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );

  export default CommentList;
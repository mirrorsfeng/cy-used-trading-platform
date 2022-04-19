import React, { memo } from 'react';

import LeftMess from './leftMess';
import RightMess from './rightMess';

type Props = {
    avator: string,
    content: string,
    user: string
}
const Message = memo(({avator, content, user}: Props) => {
    if(user === 'me') {
        return (
            <RightMess avator={avator} content={content} />
        )
    }else {
        return (
            <LeftMess avator={avator} content={content} />
        )
    }
 
})

export default Message
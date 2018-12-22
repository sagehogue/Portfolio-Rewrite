import React from 'react';

import TextBubble from './TextBubble/TextBubble';
import classes from './Avatar.module.css';

const Avatar = (props) => {
    let classList = [classes.avatar];
    if (props.isTyping) {classList.push(classes.typing)}
    return (
        <div className={classList.join(' ')}>
            <i className={"fas fa-user-circle"}></i>{props.isTyping ? <TextBubble /> : null}
        </div>
    )
}

export default Avatar;
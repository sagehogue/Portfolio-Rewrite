import React from 'react';

import TextBubble from './TextBubble/TextBubble';
import classes from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={classes.avatar}>
            <i className={"fas fa-user-circle"}></i>{props.isTyping ? <TextBubble /> : null}
        </div>
    )
}

export default Avatar;
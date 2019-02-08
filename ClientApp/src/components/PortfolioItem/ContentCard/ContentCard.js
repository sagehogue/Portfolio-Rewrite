import React from 'react';

import classes from './ContentCard.module.css';

const ContentCard = (props) => {
    return <div className={classes.Card}>
        {props.children}
    </div>
}

export default ContentCard;
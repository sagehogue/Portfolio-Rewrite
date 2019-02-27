import React from 'react';

import classes from './ContentCard.module.css';

const ContentCard = (props) => {
    let classList = [classes.Card];
    classList.push(props.Previewed? classes.Preview : '');
    classList.push(props.Active? classes.Active : '');
    return (<div className={classList.join(' ')}>
    <div className={classes.Arrow}></div>
        {props.children}
    </div>)
}

export default ContentCard;
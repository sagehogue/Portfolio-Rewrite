import React from 'react';

import classes from './ContentCard.module.css';

const ContentCard = (props) => {
    let classList = [classes.Card];
    classList.push(props.Active ? classes.Active : '');
    classList.push(!classList.includes(classes.Active) && props.Previewed ? classes.Preview : '');
    classList.push(!props.scrollable? classes.spaceEvenly : '');
    const scroll = (
        <div className={classList.join(' ')}>
            <div className={classes.Arrow}></div>
            <div className={classes.scrollWrapperOuter}>
                <div className={classes.scrollWrapperInner}>
                    {props.children}
                </div>
            </div>
        </div>
    )
    const noScroll = (
        <div className={classList.join(' ')}>
            <div className={classes.Arrow}></div>
            {props.children}
        </div>
    )

    return props.scrollable ? scroll : noScroll;
}

export default ContentCard;
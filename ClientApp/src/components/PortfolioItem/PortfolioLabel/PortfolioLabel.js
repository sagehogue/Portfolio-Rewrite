import React from 'react';

import classes from './PortfolioLabel.module.css';

const PortfolioLabel = (props) => {
    let classList = [classes.Label];
    classList.push(props.inactive? null : classes.Active);
    return <span className={classList.join(' ')}>
        {props.label}
        <hr />
    </span>
}

export default PortfolioLabel;
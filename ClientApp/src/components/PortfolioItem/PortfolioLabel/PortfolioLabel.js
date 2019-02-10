import React from 'react';

import classes from './PortfolioLabel.module.css';

const PortfolioLabel = (props) => {
    let classList = [classes.Label];
    classList.push(props.inactive? null : classes.Active);
    return <div className={classList.join(' ')}>
        {props.label}
        <hr />
    </div>
}

export default PortfolioLabel;
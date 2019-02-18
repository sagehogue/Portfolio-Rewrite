import React from 'react';

import classes from './PortfolioLabel.module.css';

const PortfolioLabel = (props) => {
    let classList = [classes.Label];
    classList.push(props.inactive? '' : classes.Active);
    classList.push(props.labelIsInvisible? classes.Invisible : '')
    return <span className={classList.join(' ')}>
        {props.label}
        <hr />
    </span>
}

export default PortfolioLabel;
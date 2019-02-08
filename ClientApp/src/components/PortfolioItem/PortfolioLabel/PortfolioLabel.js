import React from 'react';

import classes from './PortfolioLabel.module.css';

const PortfolioLabel = (props) => {
    return <div className={classes.Label}>
        {props.label}
    </div>
}

export default PortfolioLabel;
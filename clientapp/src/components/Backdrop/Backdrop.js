import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    const backdrop = <div className={classes.Backdrop} onClick={props.menuHandler}></div>;
        return !props.isDisabled? backdrop : null;
    
}

export default Backdrop;
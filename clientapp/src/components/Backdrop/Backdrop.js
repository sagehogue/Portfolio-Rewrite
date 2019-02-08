import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    let classList = [classes.Backdrop];
    classList.push(props.isDisabled? classes.Hide : '');
    const backdrop = <div className={classList.join(' ')} onClick={props.menuHandler}></div>;
        return backdrop;
    
}

export default Backdrop;
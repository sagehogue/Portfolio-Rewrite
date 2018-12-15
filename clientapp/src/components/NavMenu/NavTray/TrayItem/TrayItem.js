import React from 'react';

import classes from './TrayItem.module.css';

const trayItem = (props) => {
    return (
        <div className={classes.TrayItem}>
            {props.children}
        </div>
    )
}

export default trayItem;
import React from 'react';
import classes from './NavButton.module.css';

const NavButton = (props) => {
    let hamburgerButton = (
        <div className={classes.NavButton} onClick={props.toggleMenuHandler}>
            <div className={classes.top}></div>
            <div className={classes.middle}></div>
            <div className={classes.bottom}></div>
        </div>
    )

    let xButton = (
        <div className={classes.xButton} onClick={props.toggleMenuHandler}>
            <div className={classes.top}></div>
            <div className={classes.middle}></div>
            <div className={classes.bottom}></div>
        </div>
    )

    return props.menuClosed? hamburgerButton : xButton;
}

export default NavButton;
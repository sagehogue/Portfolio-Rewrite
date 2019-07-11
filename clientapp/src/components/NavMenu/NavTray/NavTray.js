import React from 'react';



import classes from './NavTray.module.css';

const NavTray = (props) => {
    const classList = [classes.NavTray, classes.Flex];
    if (props.menuClosed) {
        classList.push(classes.closed)
    }
    return (
        <div className={classList.join(' ')}>
            {props.children}
        </div>
    )
}
export default NavTray;
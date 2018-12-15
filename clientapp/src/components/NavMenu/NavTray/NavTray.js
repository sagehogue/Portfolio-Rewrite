import React from 'react';

import TrayItem from './TrayItem/TrayItem';

import classes from './NavTray.module.css';

const NavTray = (props) => {
    const classList = [classes.NavTray];
    if (props.menuClosed) {
        classList.push(classes.closed)
    }
    return (
        <div className={classList.join(' ')}>
            <TrayItem />
            <TrayItem />
            <TrayItem />
        </div>
    )
}
export default NavTray;
import React from 'react';

import TrayItem from './TrayItem/TrayItem';

import './NavTray.module.css';

const NavTray = (props) => {
    return (
        <div className='navTray'>
            <TrayItem />
            <TrayItem />
            <TrayItem />
        </div>
    )
}
export default NavTray;
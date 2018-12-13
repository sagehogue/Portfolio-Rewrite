import React from 'react';
import './NavButton.module.css';

const NavButton = (props) => {
    let hamburgerButton = (
        <div className="NavButton" onClick={props.toggleMenuHandler}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    )

    let xButton = (
        <div className="xButton" onClick={props.toggleMenuHandler}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    )

    return props.menuClosed? hamburgerButton : xButton;
}

export default NavButton;
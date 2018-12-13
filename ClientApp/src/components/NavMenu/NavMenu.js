import React, { Component } from 'react';
import './NavMenu.module.css';
class NavMenu extends Component {
    state = {
        menuIsClosed: true,
        activePage: "splash",
    }
    render() {
        return (
            <div className="NavMenu">
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
        )
    }
}

export default NavMenu;
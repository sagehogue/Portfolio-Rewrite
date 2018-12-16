import React, { Component } from 'react';

import NavButton from './NavButton/NavButton';
import NavTray from './NavTray/NavTray';
import TrayItem from './NavTray/TrayItem/TrayItem';
import Backdrop from '../Backdrop/Backdrop';

import classes from './NavMenu.module.css';

class NavMenu extends Component {
    state = {
        menuIsClosed: true,
        activePage: "splash",
    }

    toggleMenu = () => {
        this.setState({ menuIsClosed: !this.state.menuIsClosed })
    }

    render() {
        return (
            <div className={classes.NavMenu}>
                <NavButton
                    menuClosed={this.state.menuIsClosed}
                    toggleMenuHandler={this.toggleMenu} />
                <NavTray menuClosed={this.state.menuIsClosed}>
                    <TrayItem>Home</TrayItem>
                    <TrayItem>Vistelse</TrayItem>
                    <TrayItem>About</TrayItem>
                    <TrayItem>Resume</TrayItem>
                </NavTray>
                <Backdrop isDisabled={this.state.menuIsClosed} menuHandler={this.toggleMenu}/>
            </div>
        )
    }
}

export default NavMenu;
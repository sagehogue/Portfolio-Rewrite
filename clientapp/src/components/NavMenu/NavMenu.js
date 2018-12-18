import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/"><TrayItem>Home</TrayItem></Link>
                    <Link to="/story"><TrayItem>Vistelse</TrayItem></Link>
                    <Link to="/about"><TrayItem>About</TrayItem></Link>
                    <Link to="/resume"><TrayItem>Resume</TrayItem></Link>
                </NavTray>
                <Backdrop isDisabled={this.state.menuIsClosed} menuHandler={this.toggleMenu}/>
            </div>
        )
    }
}

export default NavMenu;
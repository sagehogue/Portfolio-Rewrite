import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavButton from './NavButton/NavButton';
import NavTray from './NavTray/NavTray';
import TrayItem from './NavTray/TrayItem/TrayItem';
import Backdrop from '../Backdrop/Backdrop';

import classes from './NavMenu.module.css';

class NavMenu extends Component {
    // state = {
    //     menuIsClosed: true,
    //     // activePage: "splash",
    //     width: window.innerWidth,
    // }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({
            menuIsClosed: true,
            // activePage: "splash",
            width: window.innerWidth,
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                width: window.innerWidth
            }
        });
    };

    handlePageChange = (e) => {
        // e.preventDefault();
        // console.log(e.target)
        const pageClicked = e.target.innerText;
        this.setState((oldState) => {
            return {
                ...oldState,
                activePage: pageClicked,
            }
        })
    }

    toggleMenu = () => {
        this.setState({ menuIsClosed: !this.state.menuIsClosed })
    }

    render() {

        return this.state.width < 600 ? (
            <div className={classes.NavMenu}>
                <NavButton
                    menuClosed={this.state.menuIsClosed}
                    toggleMenuHandler={this.toggleMenu} />
                <NavTray menuClosed={this.state.menuIsClosed}>
                    <NavLink exact to="/" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>Home</TrayItem>
                    </NavLink>

                    <NavLink to="/story" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>Vistelse</TrayItem>
                    </NavLink>
                    <NavLink to="/about" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>About</TrayItem>
                    </NavLink>
                    {/* <Link to="/about"><TrayItem>About</TrayItem></Link> */}
                    {/* <NavLink to="/portfolio" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>Portfolio</TrayItem>
                    </NavLink> */}
                </NavTray>
                <Backdrop isDisabled={this.state.menuIsClosed} menuHandler={this.toggleMenu} />
            </div>
        ) : (
                <div className={classes.DesktopMenu}>
                    <NavLink exact to="/" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>Home</TrayItem>
                    </NavLink>
                    <NavLink to="/story" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>Vistelse</TrayItem>
                    </NavLink>
                    <NavLink to="/about" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>About</TrayItem>
                    </NavLink>
                    {/* <NavLink to="/portfolio" activeClassName={classes.active}>
                        <TrayItem clickHandler={this.handlePageChange}>Portfolio</TrayItem
                        ></NavLink> */}
                </div>
            );
    }
}

export default NavMenu;
import React, { Component } from 'react';

import NavButton from './NavButton/NavButton';
import NavTray from './NavTray/NavTray';

import './NavMenu.module.css';

class NavMenu extends Component {
    state = {
        menuIsClosed: true,
        activePage: "splash",
    }

    toggleMenu = () => {
        console.log('I ran')
        this.setState({menuIsClosed: !this.state.menuIsClosed})
    }

    render() {
        return (
            <div className="NavMenu" >
            
                <NavButton 
                menuClosed={this.state.menuIsClosed} 
                toggleMenuHandler={this.toggleMenu} />
                {this.state.menuIsClosed? null : <NavTray />}
            </div>
        )
    }
}

export default NavMenu;
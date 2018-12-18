import React, { Component } from 'react';
import classes from './PageModal.module.css';

class PageModal extends Component {
    state = {
        
    }

    

    render() {
        let classList = [];
    classList.push(classes.PageModal);
    switch (this.props.displayed) {
        case "splash":
            classList.push(classes.splash);
            break;
        case "story":
            classList.push(classes.story);
            break;
        default:
            console.log(this.props.displayed);
            classList.push(classes.splash);
            break;
    }
        return (
            <div className={classList.join(' ')}>
                {this.props.children}
            </div>
        )
    }
} 

export default PageModal
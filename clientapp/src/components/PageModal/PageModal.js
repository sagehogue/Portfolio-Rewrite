import React, { Component } from 'react';
import classes from './PageModal.module.css';

// This should probably be a dumb component.

const PageModal = (props) => {
    let classList = [];
    classList.push(classes.PageModal);
    switch (props.displayed) {
        case "splash":
            classList.push(classes.splash);
            break;
        case "story":
            classList.push(classes.story);
            break;
        case "portfolio":
            classList.push(classes.portfolio);
            break;
        case "contact":
            classList.push(classes.contact);
            break;
        default:
            classList.push(classes.splash);
            break;
    }
    return (
        <div className={classes.scrollbarHider}>
            <div className={classList.join(' ')}>
                {props.children}
            </div>
        </div>
    )
}


export default PageModal
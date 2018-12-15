import React from 'react';
import classes from './PageModal.module.css';

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
        default:
            break;
    }
    return (
        <div className={classList.join(' ')}>
            {props.children}
        </div>
    )
}

export default PageModal
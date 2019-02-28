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
        case "portfolio":
            classList.push(classes.portfolio);
            break;
        case "contact":
            classList.push(classes.contact);
            break;
        case "about":
            classList.push(classes.about);
            break;
        default:
            classList.push(classes.splash);
            break;
    }
    let noScrollClasses = [...classList, classes.noScroll];

    const scroll = (
        <div className={classes.scrollbarHider}>
            <div className={classList.join(' ')}>
                {props.children}
            </div>
        </div>
    )

    const noscroll = (
        <div className={noScrollClasses.join(' ')}>
            {props.children}
        </div>
    )

    return props.noscroll ? noscroll : scroll;
}


export default PageModal
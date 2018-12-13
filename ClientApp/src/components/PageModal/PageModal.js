import React from 'react';
import './PageModal.module.css';

const PageModal = (props) => {
    let classes = 'PageModal';
    switch (props.displayed) {
        case "splash":
            classes += ' splash';
            break;
        case "story":
            classes += ' story';
            break;
        default:
            break;
    }
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default PageModal
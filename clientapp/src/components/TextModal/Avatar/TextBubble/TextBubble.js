import React, { Component } from 'react';

import classes from "./TextBubble.module.css";

class textBubble extends Component {
    
    componentDidMount() {

    }

    componentWillUnmount() {

    }
    
    render() {
        
        return (
            <div className={classes.bubble}>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
            </div>
        )
    }
}

export default textBubble
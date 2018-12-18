import React, { Component } from 'react';

import classes from "./TextBubble.module.css";

class textBubble extends Component {

    state = {
        animating: false, // 'first', 'second', 'third', refers to which div 

    }

    componentDidMount() {
        const newIntervalID = setInterval(this.animateDots, 400)
        this.intervalID = newIntervalID;
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    getDotToAnimate() {
        switch (this.state.animating) {
            case 'first':
                return 'second';
            case 'second':
                return 'third';
            case 'third':
                return 'delayed';
            case 'delayed':
                return false;
            default:
                return 'first';
        }
    }

    animateDots = () => {
        const dotToAnimate = this.getDotToAnimate();
        console.log(dotToAnimate);
        this.setState({ animating: dotToAnimate });
    }

    render() {
        switch (this.state.animating) {

            case 'first':
                return (
                    <div className={classes.bubble}>
                        <div className={`${classes.dot} ${classes.animating}`}></div>
                        <div className={classes.dot}></div>
                        <div className={classes.dot}></div>
                    </div>
                )

            case 'second':
                return (
                    <div className={classes.bubble}>
                        <div className={classes.dot}></div>
                        <div className={`${classes.dot} ${classes.animating}`}></div>
                        <div className={classes.dot}></div>
                    </div>)

            case 'third':
                return (<div className={classes.bubble}>
                    <div className={classes.dot}></div>
                    <div className={classes.dot}></div>
                    <div className={`${classes.dot} ${classes.animating}`}></div>
                </div>)
            case 'delayed':
                return (<div className={classes.bubble}>
                    <div className={classes.dot}></div>
                    <div className={classes.dot}></div>
                    <div className={classes.dot}></div>
                </div>)
            default:
                return (<div className={classes.bubble}>
                    <div className={classes.dot}></div>
                    <div className={classes.dot}></div>
                    <div className={classes.dot}></div>
                </div>)
        }
    }
}
// const bubble = (
//     <div className={classes.bubble}>
//         {(this.state.animating === 'first' ? <div className={`${classes.dot} ${classes.animating}`}></div> : <div className={classes.dot}></div>)}
{/* {this.state.animating === 'second' ? <div className={`${classes.dot} ${classes.animating}`}></div>
                                : <div className={classes.dot}></div>} */}
{/* {this.state.animating === 'third' ? <div className={`${classes.dot} ${classes.animating}`}></div>
                                : <div className={classes.dot}></div>} */}
//     </div>
// )

export default textBubble
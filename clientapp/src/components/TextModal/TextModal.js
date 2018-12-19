import React, { Component } from 'react';

import Avatar from './Avatar/Avatar';

import classes from './TextModal.module.css';

class TextModal extends Component {
    state = {
        isHovered: false,
        displayUser: this.props.user,
        typing: false,
        hideModal: this.props.hide,
    }
    // this is a mess right here.  have fun <3 I believe in you
    // componentDidMount() {
    //     const func = this.setState((oldState)=> {
    //        return {...oldState,
    //     typing: true}, 500).bind(this)
    //     this.state.displayUser() ? setTimeout(() => {this.state}, args, timeout)
    // }

    hoverOn = () => {
        this.setState({ isHovered: true });
    }

    hoverOff = () => {
        this.setState({ isHovered: false })
    }

    toggleTyping = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                typing: !oldState.typing,
            }
        })
    }

    render() {
        let classList = + this.state.isHovered ? [classes.TextModal, classes.hover].join(' ') : classes.TextModal;
        classList = classList + ' ' + classes.largeWidth + ' ' + classes.smallVertMargin;
        return !this.props.hideModal ? (
            <>
                <div className={classList}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                >
                    {this.state.displayUser ? <Avatar showBubble={this.state.typing} /> : null}
                    {this.props.title ? <h3>{this.props.title}</h3> : null}
                    {this.props.title ? <hr /> : null}
                    {this.props.children}
                </div>
            </>

        ) : null;
    }
}

export default TextModal;
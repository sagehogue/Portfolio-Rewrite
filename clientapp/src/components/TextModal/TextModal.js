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
    componentDidMount() {
        // const func = () => {
        //     this.setState((oldState) => {
        //         return {
        //             ...oldState,
        //             typing: true
        //         }
        //     })
        // }
        // setTimeout(func, 2000);
        this.typeForAWhile();

    }

    typeForAWhile(typeDuration=2000) {
        return new Promise((res, rej) => {
            this.setState((oldState) => {
                return {
                    ...oldState,
                    typing: true
                }
            })
            setTimeout(()=> {
                this.setState((oldState) => {
                    return {
                        ...oldState,
                        typing: false
                    }
                })
                res('Successfully typed')}, typeDuration)
        }) 
    }


    toggleHover = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                isHovered: !oldState.isHovered,
            }
        })
    }

    toggleTyping = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                typing: !oldState.typing,
            }
        })
    }

    toggleHide = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                hideModal: !oldState.hideModal,
            }
        })
    }

    render() {
        let classArray = [];
        classArray.push(classes.TextModal, classes.largeWidth, classes.smallVertMargin);
        this.state.isHovered ? classArray.push(classes.hover) : classArray = classArray;
        this.props.hideModal ? classArray.push(classes.hide) : classArray = classArray;
        return (
            <>
                <div className={classArray.join(' ')}
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                >
                    {this.state.displayUser ? <Avatar showBubble={this.state.typing} /> : null}
                    {this.props.title ? <h3>{this.props.title}</h3> : null}
                    {this.props.title ? <hr /> : null}
                    {this.props.children}
                </div>
            </>

        );
    }
}


export default TextModal;
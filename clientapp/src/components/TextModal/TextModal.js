import React, { Component } from 'react';

import classes from './TextModal.module.css';

class TextModal extends Component {
    state = {
        isHovered: false,
        hideModal: this.props.hide,
    }
    componentDidMount() {
    
        // maybe a check for a sound prop then make a sound! a boop!

    }


    toggleHover = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                isHovered: !oldState.isHovered,
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
        let classArray = [classes.TextModal];
        classArray.push(this.state.isHovered ? classes.hover : '');
        classArray.push(this.props.hideModal ? classes.hide : '');
        return (
            <>
                <div className={classArray.join(' ')}
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                >
                    {this.props.title ? <h3>{this.props.title}</h3> : null}
                    {this.props.title ? <hr /> : null}
                    {this.props.children}
                </div>
            </>

        );
    }
}


export default TextModal;
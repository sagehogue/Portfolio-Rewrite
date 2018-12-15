import React, { Component } from 'react';

import classes from './TextModal.module.css';

class TextModal extends Component {
    state = {
        isHovered: false
    }

    hoverOn = () => {
        this.setState({ isHovered: true });
    }

    hoverOff = () => {
        this.setState({ isHovered: false })
    }

    render() {
        const classList =+ this.state.isHovered ? [classes.TextModal, classes.hover].join(' ') : classes.TextModal;
        return (
            <div className={classList}
                onMouseEnter={this.hoverOn}
                onMouseLeave={ this.hoverOff}
            >
                {this.props.title ? <h3>{this.props.title}</h3> : null}
                {this.props.title ? <hr /> : null}
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default TextModal;
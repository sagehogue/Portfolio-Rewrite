import React, { Component } from 'react';

import './TextModal.module.css';

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
        const classes = this.state.isHovered ? 'TextModal hover' : 'TextModal';
        return (
            <div className={classes}
                onMouseEnter={this.hoverOn}
                onMouseLeave={this.hoverOff}
            >
                {this.props.title ? <h3>{this.props.title}</h3> : null}
                {this.props.title ? <hr /> : null}
                {this.props.children}
            </div>
        )
    }
}

export default TextModal;
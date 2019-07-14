import React, { Component } from 'react';

import classes from './StoryButton.module.css';

class StoryButton extends Component {
    state = {
        classList: [classes.StoryButton, 
            this.props.invisible ? classes.invisible : '',
            this.props.option ? classes.Option : classes.Story]
    }

    // Automatically makes button visible after timer - refactoring to control visibility in main file.

    // componentDidMount() {
    //     setTimeout(() => {
            // this.setState({
            //     classList: this.state.classList.filter(styleClass => styleClass !== classes.invisible)
            // })
    //     }, 500)
    // }
    
    render() {
        if (!this.props.invisible && this.state.classList.includes(classes.invisible)) {
            this.setState({
                classList: this.state.classList.filter(styleClass => styleClass !== classes.invisible)
            })
        }
        if (this.props.invisible && !this.state.classList.includes(classes.invisible)) {
            this.setState({
                classList: [classes.invisible, ...this.state.classList]
            })
        }
        return (
            <div className={this.state.classList.join(' ')} data-id={this.props.id} onClick={this.props.clickHandler} data-associatedscene={this.props.associatedScene}>
                {this.props.title ? <h3 data-id={this.props.id} data-associatedscene={this.props.associatedScene}>{this.props.title}</h3> : null}
                {this.props.title ? <hr /> : null}
                {this.props.description ? <i data-id={this.props.id} data-associatedscene={this.props.associatedScene}>{this.props.description}</i> : null}
                {this.props.children}
            </div>)
    }
}

export default StoryButton;
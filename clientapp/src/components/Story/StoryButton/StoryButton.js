import React, { Component } from 'react';

import classes from './StoryButton.module.css';

class StoryButton extends Component {
    state = {
        classList: [classes.StoryButton, 
            this.props.invisible ? classes.invisible : '',
            this.props.option ? classes.Option : classes.Story]
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                classList: this.state.classList.filter(styleClass => styleClass !== classes.invisible)
            })
        }, 500)
    }
    
    render() {
        // this.classList = [];
        // this.props.option ? this.classList.push(classes.Option) : this.classList.push(classes.Story);
        console.log(this.state.classList)
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
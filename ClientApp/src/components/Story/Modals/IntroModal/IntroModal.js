import React, { Component } from 'react';

import wait from '../../../../Utilities/wait';

import TextModal from '../../../TextModal/TextModal';

import classes from './IntroModal.module.css';

class introModal extends Component {
    state = {
        effectInDuration: this.props.durationMount, // for slideIn/fadeIn
        effectOutDuration: this.props.durationUnmount, // for slideOut/fadeOut
        effectType: this.props.type, // slide or fade
        // effectStage: this.props.type == "slide"? "offscreenLeft" : "invisible",
        classList: [this.props.type == "slide"? classes.offscreenLeft : classes.invisible],
    }

    componentDidMount() {
            this.setState((oldState) => {
                return {
                    ...oldState,
                    effectStage: this.state.effectType == "slide"? "offscreenLeft" : "invisible"
                }
            })
    }

    componentDidUpdate() {
        switch(this.state.effectStage) {
            case "offscreenLeft" :
                    wait().then(res => {
                        this.setState(oldState => {
                            return {
                                ...oldState,
                                classList: [classes.IntroModal, classes.onscreen],
                                effectStage: "transitioningVisible"
                            }
                        })
                    })
                break;
            case "transitioningVisible" :
                    wait().then(res => {
                        this.setState(oldState => {
                            return {
                                ...oldState,
                                effectStage: "onscreen"
                            }
                        })
                    })
            break;
            case "onscreen" :
                console.log(this.props.show)
                    if (this.props.show == false) {
                        this.setState(oldState => {
                            return {
                                ...oldState,
                                effectStage: "transitioningInvisible",
                                classList: [classes.IntroModal, classes.offscreenRight]
                            }
                        })
                        console.log(this.state.classList)
                        break;
                    } 
                    else {
                        break
                    }
                    case "transitioningInvisible" :
                            wait().then(res => {
                                this.setState(oldState => {
                                    return {
                                        ...oldState,
                                        effectStage: "offscreen"
                                    }
                                })
                            })
                            break;
                    case "offscreen" :
                            this.setState(oldState => {
                                return {
                                    ...oldState,
                                    effectStage: "deleting",
                                    deleteSelf: true,
                                    classList: [classes.IntroModal, classes.offscreenRight]
                                }
                            })
                            break
                    case "deleting" :
                            break;
            break;
            // case "false" :
                
            // break;
            
        }
    }

    render() {
        return this.state.deleteSelf? null : (
            <div className={this.state.classList.join(' ')}>
                <TextModal>
                    {this.props.children}
                </TextModal>
            </div>
        )
    }
}


export default introModal
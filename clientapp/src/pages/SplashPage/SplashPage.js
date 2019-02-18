import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';
import Avatar from '../../components/Avatar/Avatar';
import classes from './SplashPage.module.css';

class SplashPage extends Component {
    state = {
        typing: false,
        display: {
            first: false,
            second: false,
            third: false
        }
    }

    componentDidMount() {

        // This seems to sort of jankily work. I think the timeouts are broken. 

        // const run = 
        this.typeForAWhile(1500)
            .then(response => this.loadMessage("first"))
            // .then(response => this.pause(500))
            .then(response => this.typeForAWhile(2000))
            .then(response =>
                this.loadMessage("second")
                // .then(response => this.pause(500))
            ).then(response => this.typeForAWhile(1000))
            .then(response => this.loadMessage("third"));
    }

    typeForAWhile(typeDuration = 2000) {
        return new Promise((res, rej) => {
            this.setState((oldState) => {
                return {
                    ...oldState,
                    typing: true
                }
            })
            setTimeout(() => {
                this.setState((oldState) => {
                    return {
                        ...oldState,
                        typing: false
                    }
                })
                res('Successfully typed')
            }, typeDuration)
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

    loadMessage(MsgToDisplay, duration = 1000) {
        return new Promise((res, rej) => {
            this.setState((oldState) => {
                const newState = {
                    ...oldState,
                }
                // console.log(MsgToDisplay)
                newState.display[MsgToDisplay] = true;
                return newState
            })
            setTimeout(() => {
                res(`Loaded ${MsgToDisplay} message`)
            }, duration)
        })
    }

    // I don't think this function works.

    pause(pauseDuration = 1000) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res('pause over');
            }, pauseDuration);
        })
    }


    // need to implement handling for the pageload animations.

    render() {
        const messages = {
            first: (
                <div className={`${classes.textModal} ${classes.ToCenter} ${this.state.display.first ? null : classes.Hide}`} >
                    <TextModal hide={true}>
                        <h3>
                            <span className={`${classes.greeting} ${classes.fontCol1}`}>
                                Hi
            </span><span className={classes.period}>. </span>
                            I'm <span className={`${classes.sage} ${classes.fontCol2}`}>
                                Sage
            </span><span className={classes.period}>.</span>
                        </h3>
                        <hr></hr>
                        <p>I'm a PDX-based web developer and tech enthusiast.</p>

                    </TextModal>
                </div>),
            second: (<div className={`${classes.textModal} ${classes.ToCenter} ${this.state.display.second ? null : classes.Hide}`}>
                <TextModal hide={false}>
                    <h3>
                        <span className={`${classes.fontCol1}`}>
                            Welcome </span>
                        to <span className={`${classes.fontCol2}`}>my website</span>
                        <span className={classes.period}>.</span>
                    </h3>
                    <hr />
                    <p>To learn more, click a button below.</p>
                </TextModal>
            </div>),
            third: (<div className={`${classes.textModal} ${classes.ToCenter} ${this.state.display.third ? null : classes.Hide} ${classes.SpaceFromBottom}`}>
                <TextModal hide holdsButtons>
                    <div className={classes.flexContainer}>
                        <Link to="/story">
                            <div className={classes.Link}>Vistelse</div>
                        </Link>
                        <a href="mailto:inquiries.sagehogue@gmail.com?subject=Hey Sage, I would like to ask you something..">
                            {/* <Link to="/contact"> */}
                            <div className={classes.Link}>Contact Me</div>
                            {/* </Link> */}
                        </a>
                        <Link to="/portfolio">
                            <div className={classes.Link}>Portfolio</div>
                        </Link>
                    </div>
                </TextModal>
            </div>)
        }
        return (
            // <div className={classes.wrapper}>
            <PageModal displayed={"splash"}>
                <div className={`${classes.ToLeft} ${classes.Avatar}`}>
                    <Avatar isTyping={this.state.typing} />
                </div>
                {messages.first}
                {messages.second}
                {messages.third}
            </PageModal>
            // </div>
        )
    }
}

export default SplashPage;
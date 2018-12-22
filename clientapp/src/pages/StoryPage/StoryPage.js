import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';

import classes from './StoryPage.module.css';

class storyPage extends Component {
    state = {
        // modalInView: false, not rdy
        display: {
            introMessage: true,
        },

    }

    ComponentDidMount() {
        this.storyIntro()
    }

    storyIntro() {
        this.setState({ display: { intro: true } })
    }


    render() {
        return (
            <PageModal className={"story"} onScreen={this.state.modalInView}>
                <div className={`${classes.pageWrapper}`}>
                    <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessage ? '' : classes.Hide}`}>
                        <TextModal>
                            Welcome to the story page.
                        </TextModal>
                    </div>
                </div>
            </PageModal>
        )
    }
}

export default storyPage;
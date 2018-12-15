import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';

import classes from './PageContainer.module.css';

class PageContainer extends Component {
    // currentPage options: 'splash', 'story'
    state = {
        currentPage: "splash",
    }
    splashPage = (
        <PageModal displayed={this.state.currentPage}>
            <TextModal>
                <h3>
                    <span className={classes.greeting}>
                        Hi
                    </span><span className={classes.period}>.</span>
                    I'm <span className={classes.sage}>
                    Sage
                    </span><span className={classes.period}>.</span>
                </h3>
                <hr></hr>
                <p>I'm a PDX-based web developer and tech enthusiast.</p>
            </TextModal>
            <TextModal title='Welcome to my website.'>
                {/* <p>To learn more, click a button below.</p> */}
            </TextModal>
            <TextModal title='My work'>
                <p>Vistelse app, this website, my resume.</p>
            </TextModal>
            <TextModal title="Who am I?">
                <p>What's my name? Learn a little something about me.</p>
            </TextModal>
            <TextModal>
                <p>Great job Sage, but keep up the good work!</p>
            </TextModal>
        </PageModal>
    )

    storyPage = (
        <PageModal>

        </PageModal>
    )
    render() {
        return this.state.currentPage === "splash" ? this.splashPage : this.storyPage;
    }
}

export default PageContainer
import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';

import './PageContainer.module.css';

class PageContainer extends Component {
    state = {
        currentPage: "splash",
    }

    splashPage = (
        <PageModal displayed={this.state.currentPage}>
            <TextModal title="Hi. I'm Sage." >
                <p>I'm a PDX-based web developer and tech enthusiast.</p>
            </TextModal>
            {/* <TextModal>
                    <span className="titleWord wordWeb">web</span>
                    <span className="titleWord wordSage">Sage</span> is live!
                </TextModal> */}
            <TextModal title='Welcome to my website.'>
                {/* <p>To learn more, click a button below.</p> */}
            </TextModal>
            <TextModal title='My work'>
                <p>vistelse app</p>
            </TextModal>
            <TextModal title="Who am I?">
                <p>What's my name? Learn a little something about me.</p>
            </TextModal>
            <TextModal>
                <p>Great job Sage, but keep up the good work!</p>
            </TextModal>
        </PageModal>
    )

    render() {
        return this.state.currentPage === "splash" ? this.splashPage : null;
    }
}

export default PageContainer
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
            <TextModal title="Hi. I'm Sage.">
                I'm a PDX-based web developer and tech enthusiast.
                </TextModal>
            {/* <TextModal>
                    <span className="titleWord wordWeb">web</span>
                    <span className="titleWord wordSage">Sage</span> is live!
                </TextModal> */}
            <TextModal >
                Welcome to my website!
                </TextModal>
            <TextModal>Great job Sage, but keep up the good work!</TextModal>
        </PageModal>
    )

    render() {
        return this.state.currentPage === "splash"? this.splashPage : null;
    }
}

export default PageContainer
import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
// import TextModal from '../../components/TextModal/TextModal';

import SplashPage from '../../pages/SplashPage/SplashPage';

import classes from './PageContainer.module.css';

class PageContainer extends Component {
    // currentPage options: 'splash', 'story'
    state = {
        currentPage: "splash",
    }
    splashPage = <SplashPage currentPage={this.state.currentPage}></SplashPage>

    storyPage = (
        <PageModal>

        </PageModal>
    )
    render() {
        return this.state.currentPage === "splash" ? this.splashPage : this.storyPage;
    }
}

export default PageContainer
import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import PageModal from '../../components/PageModal/PageModal';
// import TextModal from '../../components/TextModal/TextModal';

import AboutPage from '../../pages/AboutPage/AboutPage'
import SplashPage from '../../pages/SplashPage/SplashPage';
import StoryPage from '../../pages/StoryPage/StoryPage';

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
        return (
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/story" component={StoryPage} />
                <Route path="/" component={SplashPage} />
            </Switch>
        );
        // return this.state.currentPage === "splash" ? this.splashPage : this.storyPage;
    }
}

export default PageContainer
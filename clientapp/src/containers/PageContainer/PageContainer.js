import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from '../../../node_modules/react-transition-group';
// update: by linking all the fuck to the right node module it works. yay.

// I think putting the layout and navmenu into this level is preferable to having them at the app level.
import Layout from '../Layout/Layout'
import NavMenu from '../../components/NavMenu/NavMenu';
import PageModal from '../../components/PageModal/PageModal';

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
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={450} classNames="fade">
                        <Layout>
                            <NavMenu />
                            <Switch location={location}>
                                <Route path="/about" component={AboutPage} />
                                <Route path="/story" component={StoryPage} />
                                <Route path="/" component={SplashPage} />
                            </Switch>
                        </Layout>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        );
        // return this.state.currentPage === "splash" ? this.splashPage : this.storyPage;
    }
}

export default PageContainer
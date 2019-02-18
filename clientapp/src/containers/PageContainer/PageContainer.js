import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import NavMenu from '../../components/NavMenu/NavMenu';
import PageModal from '../../components/PageModal/PageModal';
// import ContactForm from '../../components/ContactForm/ContactForm';

// import AboutPage from '../../pages/AboutPage/AboutPage';
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage';
import SplashPage from '../../pages/SplashPage/SplashPage';
import StoryPage from '../../pages/StoryPage/StoryPage';

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
            <Layout>
                <NavMenu />
                <Switch >
                    {/* <Route path="/about" component={AboutPage} /> */}
                    <Route path="/story" component={StoryPage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    {/* <Route path="/contact" component={ContactForm} /> */}
                    <Route path="/" component={SplashPage} />
                </Switch>
            </Layout>
        );
        // return this.state.currentPage === "splash" ? this.splashPage : this.storyPage;
    }
}

export default PageContainer
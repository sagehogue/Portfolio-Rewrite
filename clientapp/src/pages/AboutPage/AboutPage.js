import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';

import classes from './AboutPage.module.css';

class aboutPage extends Component {
    state = {
        anItemIsActive: false,
        displaySingleItem: false,
    }


    displayItem = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                displaySingleItem: true,
                anItemIsActive: true,
            }
        })
    }

    displayLabels = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                anItemIsActive: false,
            }
        })
    }
    render() {
        return (
            <PageModal displayed="about" noscroll>
                <div className={this.state.anItemIsActive ? classes.displaySingleContainer : classes.flexContainer}>

                    <PortfolioItem label="Story"
                        stateHandler={this.displayItem}
                        fadeLabel={this.state.anItemIsActive}
                        appearLabel={this.displayLabels}
                        experiment>

                    </PortfolioItem>
                    <PortfolioItem label="Mission"
                        stateHandler={this.displayItem}
                        fadeLabel={this.state.anItemIsActive}
                        appearLabel={this.displayLabels}
                        experiment>
                        <section>
                            <h3>Education Reform</h3>
                            <p>

                            </p>
                        </section>
                        <section>
                            <h3>End the drug war</h3>
                            <p>

                            </p>
                        </section>
                        <section>
                            <h3>Youth Outreach</h3>
                            <p>
                                I remember the painful, vulnerable days of my youth. I had to get through it alone, and knowing how painful that was, I hope to use my experience and skills to give back to the world, hopefully leaving it a better place than I found it.

                            </p>
                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="Interests"
                        stateHandler={this.displayItem}
                        fadeLabel={this.state.anItemIsActive}
                        appearLabel={this.displayLabels}
                        experiment>
                        <p>a powerlifter, a comedy fan, a music fanatic, I love craft beer and work in a brewery, and I have a lifelong interest in computers and technology.</p>
                    </PortfolioItem>
                </div>
                <div className={classes.Banner}>
                    <div className={classes.bannerStripe} />
                    <span className={[classes.firstTypography, classes.bannerTypography].join(' ')}>
                        Thanks for taking an interest!
                        </span>
                    <div className={classes.bannerStripe} />
                    <span className={[classes.secondTypography, classes.bannerTypography].join(' ')}>
                        Click any of the categories and scroll to see the full text.
                        </span>
                    <div className={classes.bannerStripe} />
                </div>
            </PageModal>
        )
    }
}

export default aboutPage;
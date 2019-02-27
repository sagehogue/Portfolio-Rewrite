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
            <PageModal displayed="about">
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
                    <span className={classes.firstTypography}>
                        Thanks for taking an interest!
                        </span>
                    <span className={classes.secondTypography}>
                        Click any of the categories to see the full image.
                        </span>
                </div>
            </PageModal>
        )
    }
}

export default aboutPage;
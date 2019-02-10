import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';

import classes from './PortfolioPage.module.css';

class PortfolioPage extends Component {
    state = {
        displaySingleItem: false,

    }

    // Need to write some kind of function that will change all the flexbox positioning so that the selected 

    componentDidMount() {
    }

    displayItem = () => {
        this.setState({ displaySingleItem: true })
    }

    fullDisplay = (
        <PageModal displayed={"portfolio"}>
            <PortfolioItem label="This Website">
                Here's a buncha shit I did in this website.
                Lots of React, fancy JavaScript shit, Asynchronous Code
                Used Google Firebase
            </PortfolioItem>
            <PortfolioItem label="Coursework">
            </PortfolioItem>
        </PageModal>
    );

    render() {
        let wrapperClassList = [classes.GridWrapper];
        // wrapperClassList.push(this.state.displaySingleItem? classes.GridWrapper : classes.FlexWrapper);
        return (
            <PageModal displayed={"portfolio"}>
                <div className={wrapperClassList.join(' ')}>
                    <PortfolioItem label="This Website" position={1} stateHandler={this.displayItem}>
                        <h3>Here's a buncha shit I did in this website.</h3>
                        <p>Lots of React,</p> <p>fancy JavaScript shit,</p> <p>Asynchronous Code</p>
                        <p>Used Google Firebase</p>
                </PortfolioItem>
                    <PortfolioItem label="Coursework" position={2} stateHandler={this.displayItem}>
                    <h3>i did all this stuff at code school</h3>
                    <p>angry dice</p>
                    <p>weather api</p>
                    <p>python stuff</p>
                    <p>django stuff</p>
                    </PortfolioItem>
                </div>
            </PageModal>
        )
    }
}


export default PortfolioPage;

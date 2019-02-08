import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';

import classes from './PortfolioPage.module.css';

class PortfolioPage extends Component {
    state = {
        displayAll: true,

    }

    // Need to write some kind of function that will change all the flexbox positioning so that the selected 

    componentDidMount() {
    }

    render() {
        // console.log(PDFObject);
        return (
            <PageModal displayed={"portfolio"}>
                <PortfolioItem label="This Website">
                Here's a buncha shit I did in this website.
                Lots of React, fancy JavaScript shit, Asynchronous Code
                Used Google Firebase
                </PortfolioItem>
                <PortfolioItem label="Coursework">
                </PortfolioItem>
            </PageModal>
        )
    }
}


export default PortfolioPage;

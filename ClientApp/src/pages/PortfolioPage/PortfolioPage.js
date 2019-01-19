import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';

import classes from './PortfolioPage.module.css';

class PortfolioPage extends Component {
    state = {

    }

    componentDidMount() {
    }

    render() {
        // console.log(PDFObject);
        return (
            <PageModal displayed={"splash"}>
                <div id="hello">PortfolioPage</div>
            </PageModal>
        )
    }
}


export default PortfolioPage;

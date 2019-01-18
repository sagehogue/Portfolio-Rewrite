import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';

import classes from './PortfolioPage.module.css';

class PortfolioPage extends Component {
    state = {

    }

    render() {
        return (
            <PageModal displayed={"splash"}>
                <div>PortfolioPage</div>
            </PageModal>
        )
    }
}


export default PortfolioPage;

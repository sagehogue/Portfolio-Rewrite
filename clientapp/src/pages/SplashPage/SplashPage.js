import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';
import classes from './SplashPage.module.css';

class SplashPage extends Component {
    state = {
        currentPage: "splash",
    }
    render() {
        return (
            <PageModal displayed={this.state.currentPage}>
                <div className={classes.FirstModalWrapper}><TextModal user="true">
                    <h3>
                        <span className={classes.greeting}>
                            Hi
                    </span><span className={classes.period}>. </span>
                        I'm <span className={classes.sage}>
                            Sage
                    </span><span className={classes.period}>.</span>
                    </h3>
                    <hr></hr>
                    <p>I'm a PDX-based web developer and tech enthusiast.</p>
                </TextModal></div>
                <TextModal title='Welcome to my website.'>
                    <p>To learn more, click a button below.</p>
                </TextModal>
                <TextModal>
                    <div className={classes.flexContainer}>
                        <div>Vistelse</div>
                        <div>Website Details</div>
                        <div>Resume.</div>
                    </div>
                </TextModal>
                {/* <TextModal>
                <p>Great job Sage, but keep up the good work!</p>
            </TextModal> */}
            </PageModal>
        )
    }
}

export default SplashPage;
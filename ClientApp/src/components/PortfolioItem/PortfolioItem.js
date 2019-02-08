import React, { Component } from 'react';

import PortfolioLabel from './PortfolioLabel/PortfolioLabel';
import Backdrop from '../Backdrop/Backdrop';
import ContentCard from './ContentCard/ContentCard';

import classes from './PortfolioItem.module.css';

class PortfolioItem extends Component {
    state = {
        closed: true,
        // preview: this.props.preview,
        menuIsClosed: true,
    }

    transformToPreview = () => {
        // I can probably do this in css actually
    }

    toggleMenu = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                closed: !oldState.closed,
                menuIsClosed: !oldState.menuIsClosed
            }
        })
    }

    transformToFullView = () => {
        // JSX for full image display
        this.setState((oldState) => {
            return {
                ...oldState,
                closed: false,
                // preview: false,
                menuIsClosed: false,
            }
        })
    }

    closedView = (
        <div className={[classes.Item, classes.ClosedItem].join(' ')} onClick={this.transformToFullView}>
            <PortfolioLabel label={this.props.label} />
            <ContentCard>
                {this.props.children}
            </ContentCard>
        </div>
    );

    openView = (
        <>
            <div className={[classes.Item, classes.FullItem].join(' ')}>
                <PortfolioLabel label={this.props.label} />
                <ContentCard>
                    {this.props.children}
                </ContentCard>
            </div>

        </>
    );

    render() {
        return (
            <>
                {this.state.closed ? this.closedView : this.openView}
                <Backdrop menuHandler={this.toggleMenu} isDisabled={this.state.menuIsClosed} />
            </>
        )
        return
    }
}

export default PortfolioItem;
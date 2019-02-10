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
        this.props.stateHandler();
        this.setState((oldState) => {
            return {
                ...oldState,
                closed: false,
                // preview: false,
                menuIsClosed: false,
            }
        })
    }

    render() {
        let classList = [classes.Item];
        classList.push(this.state.closed ? classes.ClosedItem : classes.FullItem);
        switch (this.props.position) {
            case 1:
            classList.push(classes.First);
            break;
            case 2:
            classList.push(classes.Second);
            break;
            case 3:
            classList.push(classes.Third);
            break;
        }
        return (
            <>
                <div className={classList.join(' ')} onClick={this.state.closed? this.transformToFullView : null}>
                    <PortfolioLabel label={this.props.label} inactive={this.state.closed} />
                    <ContentCard>
                        {this.props.children}
                    </ContentCard>
                </div>
                <Backdrop menuHandler={this.toggleMenu} isDisabled={this.state.menuIsClosed} />
            </>
        )
        return
    }
}

export default PortfolioItem;
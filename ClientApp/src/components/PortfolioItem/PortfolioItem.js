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
        previewLabel: false,
    }

    transformToPreview = () => {
        // I can probably do this in css actually
    }

    toggleMenu = () => {
        this.props.appearLabel();
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
        this.hoverOffHandler();
        this.setState((oldState) => {
            return {
                ...oldState,
                closed: false,
                // preview: false,
                menuIsClosed: false,
            }
        })
    }

    hoverOnHandler = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                previewLabel: true
            }
        })
    }
    hoverOffHandler = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                previewLabel: false
            }
        })
    }
    render() {
        let classList = [classes.Item,
        this.props.experiment ? classes.Experiment : ''
        ];
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
            case 4:
                classList.push(classes.Fourth);
                break;
            case 5:
                classList.push(classes.Fifth);
                break;
            case 6:
                classList.push(classes.Sixth);
                break;
            default:
                classList.push('UNASSIGNED_POSITION');
                break;
        }
        return (
            <>
                <div className={classList.join(' ')}
                    onClick={this.state.closed ? this.transformToFullView : null}
                    onMouseEnter={this.hoverOnHandler}
                    onMouseLeave={this.hoverOffHandler}>

                    <PortfolioLabel label={this.props.label}
                        inactive={this.state.closed}
                        labelIsInvisible={this.props.fadeLabel} />

                    <ContentCard Active={!this.state.closed}
                        Previewed={this.state.previewLabel}>
                        {this.props.children}
                    </ContentCard>
                </div>
                <Backdrop menuHandler={this.toggleMenu} isDisabled={this.state.menuIsClosed} portfolioItem />
            </>
        )
    }
}

export default PortfolioItem;
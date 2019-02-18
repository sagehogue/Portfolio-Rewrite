import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';

import classes from './PortfolioPage.module.css';

class PortfolioPage extends Component {
    state = {
        displaySingleItem: false,
        // Make some logic to check if one of the items is open -- if it is, change state item and props, && fade out the text of all the other titles so that it's more legible.
        anItemIsActive: false,
    }

    // Need to write some kind of function that will change all the flexbox positioning so that the selected 

    componentDidMount() {
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
        let wrapperClassList = [classes.GridWrapper];
        return (
            <PageModal displayed={"portfolio"}>
                <div className={wrapperClassList.join(' ')}>
                    <PortfolioItem label="About Me" position={1} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>
                        <section>
                            <p>Here is information about me</p>
                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="This Website" position={2} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>
                        <section>
                            <h3>Construction Details</h3>
                            <p>I originally started this website to provide direction for my learning during code school and to serve as a visual repository for my projects. I initially built it with a vanilla JavaScript front-end and a python backend powered by Django. I was very much learning everything as I went, and so the resulting product was ugly and of poor quality.

                            </p>
                            <p>After code school, I decided that refactoring this website would be the perfect opportunity for me to learn a framework I had an eye on, React, and so I basically remade this from scratch using React for my front-end and Google's Firebase for my data hosting needs. </p>
                            <p>ES6</p>
                        </section>
                        <section>
                            <h3>Vistelse</h3>
                            <p>This began as a </p>
                            <ul>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    Google Firebase
                                </li>
                            </ul>
                            <p></p>
                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="Projects" position={3} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>
                        <section>
                            <h3>i did all this stuff at code school</h3>
                            <p>angry dice</p>
                            <p>weather api</p>
                            <p>python stuff</p>
                            <p>django stuff</p>
                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="Volunteer Work" position={4} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>
                        <section>
                            <p>Women's Crisis Center IT work</p>
                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="Work Experience" position={5} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>
                        <section>
                            <p>Vagabond Brewery - <i>Prep Cook</i></p>
                        </section>
                        <section>
                            <p>TPD - <i>Field Staff</i></p>
                        </section>
                    </PortfolioItem>
                </div>
            </PageModal>
        )
    }
}


export default PortfolioPage;
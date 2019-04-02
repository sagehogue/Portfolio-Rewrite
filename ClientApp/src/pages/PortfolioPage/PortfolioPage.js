import React, { Component } from 'react';

import { Route } from 'react-router';

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
            <PageModal displayed={"portfolio"} noscroll>
                <div className={wrapperClassList.join(' ')}>
                    <div className={classes.firstBanner} />
                    <div className={classes.secondBanner} />
                    {/* <PortfolioItem label="About Me" position={1} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>

                        <section className={classes.Greeting}>
                            <span>Thanks for taking the time to check my page out!</span>
                        </section>
                        <section>

                            <p>
                                I'm a Portland local, 

                            </p>
                            <p>
                                Though you are probably viewing this page because you are curious about my web development skills, I have a wide ranging array of interests and values.
                            </p>
                        </section>

                    </PortfolioItem> */}
                    <PortfolioItem label="This Website" position={1} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels} scrollable experiment>
                        <section>
                            <h3>Construction Details</h3>
                            <p>I originally started this website to provide direction for my learning during code school and to serve as a visual repository for my projects. I initially built it with a vanilla JavaScript front-end and a python backend powered by Django. I was very much learning everything as I went, and so the resulting product was ugly and of poor quality.

                            </p>
                            <p>After code school, I decided that refactoring this website would be the perfect opportunity for me to learn a framework I had an eye on, React, and so I basically remade this from scratch using React for my front-end and Google's Firebase for my data hosting needs. </p>
                            <p>ES6</p>
                        </section>

                    </PortfolioItem>
                    <PortfolioItem label="Projects" position={2} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels} scrollable experiment>
                        <section>
                        
                            <a href="/will-site">
                            
                                <h2>Will Lucas's Portfolio</h2>
                            </a>
                        
                            <p>A single page detailing his photography. React.js.
                                {/* using sanity.io CMS to let him manage his own images. */}
                            </p>
                        </section>
                        <section>
                            <h2>Vistelse</h2>
                            <p>Vistelse is the name of my 'Choose Your Own Adventure" app. It retrieves a collection of JSON documents that represent CYOA stories and allows you to click through them, featuring branching story paths. <i>Now hiring authors.</i>
                                <ul><h5>Tech Utilized:</h5>
                                    <li>Axios</li>
                                    <li>Google Firebase</li>
                                    <li>React</li>
                                    <li>Lot of promises for sequencing of events.</li>
                                </ul>
                            </p>
                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="Skills" position={3} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels} scrollable experiment>
                        <section>
                            <h3>Web Development</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3, SASS</li>
                                <li>JavaScript, ES6</li>
                                <li>React.js, react-router</li>
                                <li>Some experience writing APIs and conducting back-end operations in Python 3, C# 7.0</li>
                                <li>MongoDB/SQLite/Firebase - Basic database querying/write operations</li>
                                <li>Hosting for static sites and apps</li>
                                <li>git</li>
                            </ul>
                        </section>
                    </PortfolioItem>
                    {/* <PortfolioItem label="My Mission" position={4} stateHandler={this.displayItem} fadeLabel={this.state.anItemIsActive} appearLabel={this.displayLabels}>
                        <section>
                            <h3>Education Reform</h3>
                            <p>

                            </p>
                        </section>
                        <section>
                            <h3>End the drug war</h3>
                            <p>

                            </p>
                        </section>
                        <section>
                            <h3>Youth Outreach</h3>
                            <p>
                                I remember the painful, vulnerable days of my youth. I had to get through it alone, and knowing how painful that was, I hope to use my experience and skills to give back to the world, hopefully leaving it a better place than I found it.

                            </p>
                        </section>
                    </PortfolioItem> */}
                </div>
            </PageModal>
        )
    }
}


export default PortfolioPage;

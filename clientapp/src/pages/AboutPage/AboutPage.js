import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';

import classes from './AboutPage.module.css';

class aboutPage extends Component {
    state = {
        anItemIsActive: false,
        displaySingleItem: false,
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
        return (
            <PageModal displayed="about" noscroll>
                <div className={this.state.anItemIsActive ? classes.displaySingleContainer : classes.flexContainer}>

                    <PortfolioItem label="Story"
                        stateHandler={this.displayItem}
                        fadeLabel={this.state.anItemIsActive}
                        appearLabel={this.displayLabels}
                        experiment scrollable>
                        <section>
                            <h3>Cali born, Portland raised</h3>
                            <p>I was born on a Friday night in the 90’s in a college town known as Chico. I moved to Portland as a young child and was raised there, immersed in the unique community and humanitarian culture of the town throughout my teens and early adulthood. I entered the workforce through the food service/catering industry, getting my start at a bustling local deli and moving on to do corporate catering work for locations such as Google and the University of Portland.</p>  <p>I soon grew to tire of the repetitive nature of the jobs I was able to get, and so I began to seek a more meaningful and gratifying way to earn a living. However, being a young man with little guidance or plan to speak of, I had no idea how to approach that. How could I develop expertise largely independently, open a career path, and build a future for myself?</p>
                            <p>After reviewing my options, I decided to give web development a shot. I have long held a general appreciation for programming, but until I took my bootcamp at PDX Code Guild I was largely ignorant to what it actually was, and had never tackled anything more complex than a HTML web page. It was quite the leap of faith for me, having no real idea what I was getting myself into or even if I would be interested in it after a few months had passed, but my gambit proved a successful one, and after a few short months not only did I know how to create a full-stack website, but I had found a professional passion and industry to boot.</p> <p>Since bootcamp graduation, I have spent my time expanding my skillset and learning more about the industry I have chosen. There’s an unlimited amount of information and ability out there to be freely gained, and I ambitiously seek it out to arm my future self with the best possible problem solving techniques I can.</p>


                        </section>
                    </PortfolioItem>
                    <PortfolioItem label="Mission"
                        stateHandler={this.displayItem}
                        fadeLabel={this.state.anItemIsActive}
                        appearLabel={this.displayLabels}
                        experiment scrollable>
                        <section>
                            <h3>Under Construction...</h3>
                            <h3>Education Reform</h3>
                            <p>
                                As time and culture progress forward, modern society has less and less use for the dutiful worker. Our national educational system has yet to shake the antiquated goal of drone production, resulting in massive amounts of squanded creativity and human capital.
                            </p>
                        </section>
                        {/* <section>
                            <h3>Ending The Drug War And Mass Incarceration</h3>
                            <p>
                                This is just straight up evil. We need a compassionate perspective, mass incarceration poisons our own society as does our entire concept of a prison. These punitive measures do not prevent crime - they merely criminally radicalize prisoners.
                            </p>
                        </section> */}
                        {/* <section>
                            <h3>Youth Outreach</h3>
                            <p>
                                I remember the painful, vulnerable days of my youth. I had to get through it alone, and knowing how painful that was, I hope to use my experience and skills to give back to the world, hopefully leaving it a better place than I found it.

                            </p>
                        </section> */}
                    </PortfolioItem>
                    <PortfolioItem label="Interests"
                        stateHandler={this.displayItem}
                        fadeLabel={this.state.anItemIsActive}
                        appearLabel={this.displayLabels}
                        experiment scrollable>
                        <section>
                            <h3>Under Construction...</h3>
                            <p>Powerlifter, a comedy fan, a music fanatic, I love craft beer and work in a brewery, and I have a lifelong interest in computers and technology.</p>

                        </section>
                    </PortfolioItem>
                    <PortfolioItem 
                    label="This Website"
                     stateHandler={this.displayItem} 
                     fadeLabel={this.state.anItemIsActive} 
                     appearLabel={this.displayLabels} 
                     scrollable experiment>
                        <section>
                            <h3>Construction Details</h3>
                            <p>I originally started this website to provide direction for my learning during code school and to serve as a visual repository for my projects. I initially built it with a vanilla JavaScript front-end and a python backend powered by Django. I was very much learning everything as I went, and so the resulting product was ugly and of poor quality.

                            </p>
                            <p>After code school, I decided that refactoring this website would be the perfect opportunity for me to learn a framework I had an eye on, React, and so I basically remade this from scratch using React for my front-end and Google's Firebase for my data hosting needs. </p>
                            <p>ES6</p>
                        </section>

                    </PortfolioItem>
                    <PortfolioItem label="Projects"
                     stateHandler={this.displayItem}
                      fadeLabel={this.state.anItemIsActive} 
                      appearLabel={this.displayLabels} 
                      scrollable experiment>
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
                    <PortfolioItem label="Skills"
                     stateHandler={this.displayItem} 
                     fadeLabel={this.state.anItemIsActive} 
                     appearLabel={this.displayLabels} 
                     scrollable experiment>
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
                </div>
                {/* <div className={classes.Banner}>

                    <div className={classes.bannerStripe} />
                    <span className={[classes.firstTypography, classes.bannerTypography].join(' ')}>
                        Thanks for taking an <span className={classes.yellowFont}>interest!</span>
                        </span>
                    <div className={classes.bannerStripe} />
                    <span className={[classes.secondTypography, classes.bannerTypography].join(' ')}>
                    <span className={classes.yellowFont}>Click </span>any of the <span className={classes.yellowFont}>categories </span>  and <span className={classes.yellowFont}>scroll</span> to see the full text.
                        </span>
                    <div className={classes.bannerStripe} />
                    <div className={classes.bannerStripe} />
                </div> */}
            </PageModal>
        )
    }
}

export default aboutPage;
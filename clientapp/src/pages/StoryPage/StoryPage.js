import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';
import StoryButton from '../../components/Story/StoryButton/StoryButton';

// I like the idea of messages coming into view from left, exiting to the right. Nice and orderly, like a play!

import classes from './StoryPage.module.css';


// Def need to code in some authentication!!!

class storyPage extends Component {
    state = {
        // modalInView: false, not rdy
        display: {
            introMessages: true,
            buttonBox: false,
            storyButtons: []
        },
        // Initial repository of story data. Used to generate more specific groups of data.
        storyCollection: [],
        // Actually includes ID as well. For initial rendering of story buttons.
        buttonTitleAndDesc: [],
        // true after componentDidMount, next update triggers button rendering
        shouldGenerateStoryButtons: false,

    }

    componentDidMount() {
        let retrievedStories = localStorage.getItem('storyInfoLoaded') ? JSON.parse(localStorage.getItem('stories')) : this.getAllStories()
        retrievedStories.forEach(story => {
            this.setState((oldState) => {
                const updatedArray = [...oldState.buttonTitleAndDesc]
                updatedArray.push({ title: story.title, description: story.description, id: story.id })
                return {
                    ...oldState,
                    display: { ...oldState.display },
                    buttonTitleAndDesc: updatedArray
                }
            })
        })
        localStorage.setItem('stories', JSON.stringify(retrievedStories));
        localStorage.setItem('storyInfoLoaded', 'true');
        this.setState((oldState) => {
            return {
                ...oldState,
                display: { ...oldState.display },
                shouldGenerateStoryButtons: true,
            }
        })
    }

    componentDidUpdate() {
        if (this.state.shouldGenerateStoryButtons) {
            const storyButtons = this.state.buttonTitleAndDesc.map((story) => {
                // Make storybutton components
                return <StoryButton key={story.id} title={story.title} description={story.description} />
            })
            this.setState((oldState) => {
                const newState = {
                    ...oldState,
                    display: {
                        ...oldState.display,
                        storyButtons: storyButtons
                    }, shouldGenerateStoryButtons: false,
                }
                return newState;
            })
        }
    }

    async getAllStories() {
        return new Promise((res, rej) => {
            const allStories = fetch(this.apiPaths.everything);
            res(allStories);
        })
    }

    apiPaths = {
        // gets all test data
        everything: "https://localhost:5001/api/story",
        // TODOS:
        // storyTitles: ".../api/story/titles"
        // requestStory: ".../api/story/{requestedstory}"
    }
    testButton = (
        <div className={classes.testButton} onClick={() => {
            localStorage.clear()
        }}>
            localStorage.clear()
        </div>
    )

    introMessages = {
        first: (
            <div className={`${classes.introModal} ${classes.textModal} ${classes.firstIntro} ${this.state.display.introMessages ? '' : classes.Hide}`}>
                <TextModal>
                    <p>Welcome to the story page.</p>
                </TextModal>
            </div>
        ),
        second: (
            <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessages ? '' : classes.Hide} ${classes.secondIntro}`}>
                <TextModal>
                    <p>This is a 'choose your own adventure' experience.</p>
                </TextModal>
            </div>
        ),
        third: (
            <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessages ? '' : classes.Hide} ${classes.thirdIntro} `}>
                <TextModal>
                    <p>To begin, select a prompt.</p>
                </TextModal>
            </div>
        )
    }

    render() {
        return (
            <PageModal className={"story"} onScreen={this.state.modalInView}>
                <div className={`${classes.pageWrapper}`}>
                    <div className={`${classes.messageWrapper}`}>
                        {this.state.display.introMessages ? this.introMessages.first : null}
                        {this.state.display.introMessages ? this.introMessages.second : null}
                        {this.state.display.introMessages ? this.introMessages.third : null}

                    </div>
                    <div className={`${classes.ButtonBox} ${classes.intro}`}>
                        {/* {this.testButton} */}
                        {this.state.display.storyButtons}
                    </div>
                </div>
            </PageModal>
        )
    }
}

export default storyPage;
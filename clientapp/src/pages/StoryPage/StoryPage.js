import React, { Component } from 'react';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';

// I like the idea of messages coming into view from left, exiting to the right. Nice and orderly, like a play!

import classes from './StoryPage.module.css';


// Def need to code in some authentication!!!

class storyPage extends Component {
    state = {
        // modalInView: false, not rdy
        display: {
            introMessage: false,
        },
        storyCollection: [],
        titleCollection: [],
        buttonTitleAndDesc: [],

    }

    componentDidMount() {
        if (!localStorage.getItem('storyInfoLoaded')) {
            this.getAllStories()
        } else {
            const retrievedStories = JSON.parse(localStorage.getItem('stories'))
            retrievedStories.forEach(story => {
                this.setState((oldState) => {
                    const updatedArray = [...oldState.buttonTitleAndDesc] 
                    updatedArray.push({title: story.title, description: story.description, id: story.id})
                    return {
                        ...oldState,
                        buttonTitleAndDesc: updatedArray
                    }
                })
            })
            // this.setState({
                // Logic to get localstorage, JSON.parse it, iterate through resulting object and set state with the story objects.
            // })
        }
        console.log('mounted!')
        // this.getAllStories();
    }

    componentDidUpdate() {

    }

    async getAllStories() {
        fetch(this.apiPaths.everything).then(res => res.json())
            .then((result) => {
                localStorage.setItem('stories', JSON.stringify(result));
                result.forEach((story) => {
                    this.setState((oldState) => {
                        let newArray = [...this.state.storyCollection];
                        newArray.push(story)
                        const newState = {
                            ...oldState,
                            storyCollection: newArray
                        }
                        return newState;
                    })
                    // this.state.titleCollection.push(story.title)
                    console.log(this.state.storyCollection);
                })
                this.setState({
                    storyInfoLoaded: true,
                })
                localStorage.setItem('storyInfoLoaded', 'true')
            })
    }

    async getTitleArray() {
        fetch(this.apiPaths.everything).then(res => res.json())
            .then((result) => {
                result.forEach((story) => {
                    this.setState((oldState) => {
                        let newArray = [...this.state.titleCollection];
                        newArray.push(story.title)
                        const newState = {
                            ...oldState,
                            titleCollection: newArray
                        }
                        return newState;
                    })
                    // this.state.titleCollection.push(story.title)
                    console.log(this.state.titleCollection);
                })
                this.setState({
                    storyTitlesLoaded: true,
                })
                this.storyIntro()
            }
            )
    }

    apiPaths = {
        // gets all test data
        everything: "https://localhost:5001/api/story",
        // TODOS:
        // storyTitles: ".../api/story/titles"
        // requestStory: ".../api/story/{requestedstory}"
    }

    storyIntro() {
        this.setState({ display: { intro: true } })
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
            <div className={`${classes.introModal} ${classes.textModal} ${classes.firstIntro} ${this.state.display.introMessage ? '' : classes.Hide}`}>
                <TextModal>
                    <p>Welcome to the story page.</p>
                </TextModal>
            </div>
        ),
        second: (
            <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessage ? '' : classes.Hide} ${classes.secondIntro}`}>
                <TextModal>
                    <p>This is a 'choose your own adventure' experience.</p>
                </TextModal>
            </div>
        ),
        third: (
            <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessage ? '' : classes.Hide} ${classes.thirdIntro}`}>
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
                    {this.introMessages.first}
                    {this.introMessages.second}
                    {this.introMessages.third}
                    <div className={classes.ButtonBox}>
                    {this.testButton}
                    </div>
                </div>
            </PageModal>
        )
    }
}

export default storyPage;
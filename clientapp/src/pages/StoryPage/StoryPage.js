import React, { Component } from 'react';

import axios from '../../axios-orders';

import PageModal from '../../components/PageModal/PageModal';
import TextModal from '../../components/TextModal/TextModal';
import Intro_modal from '../../components/Story/Modals/IntroModal/IntroModal';
import StoryButton from '../../components/Story/StoryButton/StoryButton';

// I like the idea of messages coming into view from left, exiting to the right. Nice and orderly, like a play!

import wait from '../../Utilities/wait';

import classes from './StoryPage.module.css';

// Def need to code in some authentication!!!
// I should probably refactor my code so I have some functions that set the state of the scene, and another that uses that data to generate ui features.

// TODOS
// Refactor scene updating logic - function should take a scene object and normalize state based off of that. should return a promise that can be consumed by another function which will render the HTML based off of the new and updated state!

class storyPage extends Component {
    state = {
        // modalInView: false, not rdy
        waiting: false,
        display: {
            introMessages: true,
            first: false,
            second: false,
            third: false,
            buttonBox: false,
            storyButtons: [],
            shouldGenerateStoryButtons: false,
        },
        story: {
            selected: null,
            currentScene: null,
            isEndScene: false,
        },
        // Initial repository of story data. Used to generate more specific groups of data.
        storyCollection: [], // generates arrays of JSX
        // true after componentDidMount, next update triggers button rendering
        shouldGenerateStoryButtons: false,

    }

    componentDidMount() {
        // Code animating the initial messages into view goes here
        wait()
            .then(response => this.loadMessage("first"))
            .then(response => wait())
            .then(response => this.loadMessage("second"))
            .then(response => wait())
            .then(response => this.loadMessage("third"))
            .then(response => wait())
            .then(response => {
                let retrievedStories;
                if (localStorage.getItem('storyInfoLoaded')) {
                    retrievedStories = JSON.parse(localStorage.getItem('stories'));
                    this.addStoriesToState(retrievedStories);
                    this.setInitialState(retrievedStories);
                } else {
                    retrievedStories = this.getAllStories().then((res) => {
                        return res;
                    }).then((data) => {
                        const storyArray = Object.values(data[0]).map(val => val);
                        this.addStoriesToState(storyArray)
                        localStorage.setItem("stories", JSON.stringify(storyArray));
                        localStorage.setItem("storyInfoLoaded", "true");
                        return storyArray;
                    }).then((data => {
                        this.setInitialState(data);
                    }))
                }
            })
            // .then(response => this.loadButtons("type: story")) // accepts ternary values
        // Code below should run ASAP, but buttons should not appear until
        // animations have completed. 
        
        // Code below deduces if stories are in memory and if not, queries them and stores in memory.
    }
    componentDidUpdate() {
        if (this.state.shouldGenerateStoryButtons) {
            this.generateStoryButtons()
        }
    }

    pageModalRef = React.createRef();
    scrollPageModal = () => window.scrollTo(0, this.pageModalRef.current.offsetTop)

    loadMessage(MsgToDisplay) {
        return new Promise((res) => {
            this.setState((oldState) => {
                const newState = {
                    ...oldState,
                    ...oldState.display,
                    ...oldState.story,
                    ...oldState.storyCollection
                }
                newState.display[MsgToDisplay] = true;
                return newState
            })
                res(`Loaded ${MsgToDisplay} message`)
        })
    }

    generateStoryButtons() {
        // Make array of storybutton components, returning null if story.scenes has no data.
        const storyButtons = this.state.storyCollection.map((story, index) => {
            if (story.scenes) {
                return <StoryButton key={story["_id"] + index} id={story.title} title={story.title} description={story.description} clickHandler={this.switchToSelectedStory} />
            } else {
                return null;
            }
        })
        // Updates state, shouldGenerateStoryButtons made false to avoid getting stuck in loop
        this.setState((oldState) => {
            return {
                ...oldState,
                display: {
                    ...oldState.display,
                    storyButtons: storyButtons
                }, shouldGenerateStoryButtons: false,
                storyCollection: [...oldState.storyCollection],
            }
        })
    }

    setInitialState(retrievedStories) {
        this.setState((oldState) => {
            return {
                ...oldState,
                display: { ...oldState.display },
                storyCollection: [...retrievedStories],
                shouldGenerateStoryButtons: true,
            }
        })
    }

    addStoriesToState = storyInput => {
        let storyArray;
        if (!Array.isArray(storyInput)) {
            storyArray = [storyArray];
        } else {
            storyArray = storyInput;
            // storyArray = Object.values(storyInput[0]).map(val => val);
        }
        localStorage.setItem('stories', JSON.stringify(storyArray));
        // localStorage.setItem('storyInfoLoaded', 'true');
        storyArray.forEach(story => {
            this.setState((oldState) => {
                return {
                    ...oldState,
                    display: { ...oldState.display },
                    storyCollection: [...oldState.storyCollection],
                }
            })
        })
    }

    async getAllStories() {
        return new Promise((res, rej) => {
            // const allStories = 
            axios.get(this.apiPaths.test).then((res) => {
                // console.log(JSON.parse(res.request.response));
                return [JSON.parse(res.request.response)]
            }).then(response => res(response));
        })
    }

    // this handles clicks on the option buttons.
    optionHandler = (e) => {
        const nextSceneLocator = e.target.getAttribute("data-associatedscene");
        const nextScene = this.state.story.selected.scenes[nextSceneLocator];
        this.updateStateToNextScene(nextScene, nextSceneLocator);
    }

    updateStateToNextScene = async (scene, identifier) => {
        this.setState((oldState) => {
            let isEndScene;
            // console.log(scene.options.first)
            try {
                scene.options === undefined ? isEndScene = true : isEndScene = false;
                let nextOptionButtons;
                if (isEndScene) {
                    nextOptionButtons = []
                } else {
                    nextOptionButtons = [...Object.values(scene.options).map((optionKeyValArray, index) => {
                        return <StoryButton title={optionKeyValArray.label} description={optionKeyValArray.text} associatedScene={optionKeyValArray.associatedScene} key={index} option clickHandler={this.optionHandler} />
                    })]
                }
                return {
                    ...oldState, display: {
                        ...oldState.display,
                        introMessages: false,
                        storyButtons: false,
                        optionButtons: nextOptionButtons,
                        scene: (
                            <div className={`${classes.sceneModal} ${classes.textModal}`}>
                                <TextModal title={scene.title}>
                                    {Array.isArray(scene.text) ? scene.text.map((textLine, key) => { return <p className={classes.multiLine} key={key}>{textLine}</p> }) : scene.text}
                                    {/* <p>{Array.isArray(scene.text)? scene.text.join('\n') : scene.text}</p> */}
                                    {/* <p>{scene.text}</p> */}
                                </TextModal>
                            </div>
                        )
                    },
                    storyCollection: [...oldState.storyCollection],
                    story: {
                        ...oldState.story,
                        selected: oldState.story.selected,
                        currentScene: { ...scene, scene: identifier },
                        isEndScene: isEndScene,
                    }
                }
            }
            catch (error) {
                console.log("Scene likely not implemented.\n" + error);
            }
        })
    }

    switchToSelectedStory = (e) => {
        e.stopPropagation();
        const storyToLoad = e.target.getAttribute("data-id"); 
        console.log(storyToLoad);
        const selectedStory = this.state.storyCollection.filter(story => {
            if (story.title === storyToLoad) {
                return true
            } else return false;
        });
        this.setState((oldState) => {
            return {
                ...oldState, display: {
                    ...oldState.display,
                    introMessages: false,
                    first: false,
                    second: false,
                    third: false,
                    storyButtons: false,
                    optionButtons: [...Object.values(selectedStory[0].scenes.first.options).map((optionKeyValArray, index) => {
                        return <StoryButton title={optionKeyValArray.label} description={optionKeyValArray.text} associatedScene={optionKeyValArray.associatedScene} key={index} option clickHandler={this.optionHandler} />
                    })],
                    scene: (
                        <div className={`${classes.sceneModal} ${classes.textModal}`}>
                            <TextModal title={selectedStory[0].scenes.first.title}>

                                {Array.isArray(selectedStory[0].scenes.first.text) ? selectedStory[0].scenes.first.text.map((textLine, key) => { return <p className={classes.multiLine} key={key}>{textLine}</p> }) : selectedStory[0].scenes.first.text}
                                {/* <p>{Array.isArray(selectedStory[0].scenes.first.text)? selectedStory[0].scenes.first.text.join('\n') : selectedStory[0].scenes.first.text}</p> */}
                                {/* <p>{selectedStory[0].scenes.first.`text}</p> */}
                            </TextModal>
                        </div>
                    )
                },
                storyCollection: [...oldState.storyCollection],
                story: {
                    selected: selectedStory[0],
                    currentScene: { ...selectedStory[0].scenes.first, scene: "first" },
                    sceneOptions: Object.values(selectedStory[0].scenes.first.options)
                }
            }
        })
    }

    selectStoryHandler = (e) => {
        this.setState((oldState) => {
            return {
                ...oldState,
                shouldGenerateStoryButtons: true,
                story: {
                    selected: null,
                    currentScene: null,
                    isEndScene: false,
                },
                display: {
                    introMessages: true,
                    first: true,
                    second: true,
                    third: true,
                    buttonBox: false,
                    storyButtons: [],
                    shouldGenerateStoryButtons: false,
                },
            };
        })
    }

    // Object holding different API pathway reference attributes.
    apiPaths = {
        // gets all test data
        everything: "https://localhost:5001/api/story",
        firebase: "https://websage-mph.firebaseio.com/",
        test: 'https://websage-mph.firebaseio.com/stories.json',
    }


    selectAnotherStoryButton = (
        <StoryButton title="Select Another Story?" option clickHandler={this.selectStoryHandler} />
    )
    // Some JSX I wanted to get out of the render method. 
    introMessages = {
        first: (
            <div className={`${classes.introModal} ${classes.textModal} ${classes.firstIntro} ${this.state.display.introMessages ? '' : classes.Hide}`}>
                <TextModal>
                    <h3>Welcome to <span className={classes.textEmphasis}>Vistelse!</span></h3>
                    <p>Vistelse is the Swedish word for sojourn, but more importantly, it's the name of this 'choose your own adventure' app.</p>
                </TextModal>
            </div>
        ),
        second: (
            <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessages ? '' : classes.Hide} ${classes.secondIntro}`}>
                <TextModal>
                    <p>Right now I only have one story, but I'm capable of holding a lot more. Check back soon!</p>
                </TextModal>
            </div>
        ),
        third: (
            <div className={`${classes.introModal} ${classes.textModal} ${this.state.display.introMessages ? '' : classes.Hide} ${classes.thirdIntro} `}>
                <TextModal>
                    <p className={classes.initiallyDisplayedMessage}>
                        Select your <i className={classes.Papyrus}>experience.</i>
                    </p>
                </TextModal>
            </div>
        )
    }

    render() {
        let buttonBoxClasses = [classes.ButtonBox];
        buttonBoxClasses.push(this.state.display.introMessages === true ? classes.intro : '');
        return (
            <PageModal className={"story"} onScreen={this.state.modalInView} >
                <div className={`${classes.pageWrapper}`}>
                    <div className={`${classes.messageWrapper}`}>

                        {/* 
                        I think I will need to rewrite some of this. Problem is, they aren't rendered
                        until they are supposed to be onscreen in the correct place. 
                        So how can they be animated in from the left or right?I'll probably have to 
                        make some offscreenLeft and offscreenRight classes to use to control these.
                        Perhaps by introducing logic into the introMessages to determine what classes
                        they need to have, depending on the state. The loadMessage function could manage that.
                        Perhaps a removeMessage function could be created to control the animation off screen. 
                        */}
                        {this.state.display.first ? this.introMessages.first : null}
                        {this.state.display.second ? this.introMessages.second : null}
                        {this.state.display.third ? this.introMessages.third : null}
                        {<Intro_modal type="slide" show={this.state.display.introMessages}>Hello from the modal</Intro_modal>}
                        {this.state.display.scene}
                    </div>
                    <div className={buttonBoxClasses.join(' ')}>
                        {this.state.display.storyButtons}
                        {this.state.display.optionButtons ? this.state.display.optionButtons : null}
                        {this.state.story.isEndScene ? this.selectAnotherStoryButton : null}
                    </div>
                </div>
            </PageModal>
        )
    }
}

export default storyPage;
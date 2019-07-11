# TODOS

## Observations
* Portfolio and About pages can likely be combined
* Text modals on those 2 pages need to be standardized.
* Vistelse needs some further observations and tinkering to make it better.
* Ensure design is appropriately responsive.
* Lots of sloppy code in this repo. Worth your time to clean out dead code and format some.
* I don't have many good extensions for this text editor. I don't even have my hotkeys set to that of pycharm.

## Home
* Consider increasing animation speed. Currently takes a while.
* Use localSession to track end of home page animations, do not repeat them to a user who has seen them already during session.

## Vistelse
* Implement scroll indicator for long text passages
* Implement textFadeIn/textFadeOut features from original project. Should smoothly animate words into view individually, fade out all when an option is selected.
* Implement intelligent scrolling to keep latest text in view, when text body will exceed visible space.

## About
* Recode preview window to use an animation rather than a transition - the purpose of this is to ensure it goes one way. The opacity fading out over time after the .active .card window has been closed looks bad as it immediately gets squished into a grid but slowly fades from view.

## Portfolio
* Recycle Page

## Completed
* About/Portfolio pages need some styling. Currently the textwalls don't have a bg-col, not very readable or pretty.
* Convert page into about/portfolio hybrid - 
* Under existing content, create a "My Work" section with content below.
* In mobile view, when hamburger menu is opened and then closed it switches quickly from left alignment to center alignment before disappearing from view.
* After removing the Portfolio page, the navbar may be broken and some content may need to be trimmed from the home page.
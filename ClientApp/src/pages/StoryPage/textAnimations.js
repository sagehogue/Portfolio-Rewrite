// Function is intended to take a passage of text and turn it into a series of span elements, so that each word can be referenced individually,
// rather than being a part of a larger sentence or body of text that is its own element.

function spanify(firstCall = false) {
    const spanClass = 'word';
    if (firstCall) {
        let spanifySuccessMessage = function () {
            console.log('successful spanify')
        }
        const textContainer = $('#storyWelcome');
        const textStr = textContainer.text();
        return new Promise(function (res, rej) {
            $(`.${spanClass}`).css('opacity', 0);
            const splitText = textStr.split(' ');
            textContainer.empty();
            const timeoutDuration = 200;
            for (i in splitText) {
                textContainer.append(`<span class='${spanClass}'>${splitText[i]} </span>`)
            }
            setTimeout(res, timeoutDuration)

        })
    } else {
        const textContainer = $('#textBox');
        const textStr = localStorage.getItem('sceneText');
        console.log(textStr)
        const timeoutDuration = 1000;
        let spanifySuccessMessage = function () {
            console.log(textStr)
        }
        return new Promise(function (res, rej) {
            $(`.${spanClass}`).css('opacity', 0);
            const splitText = textStr.split(' ');
            textContainer.empty();
            for (i in splitText) {
                textContainer.append(`<span class='${spanClass}'>${splitText[i]} </span>`)
            }
            setTimeout(res, timeoutDuration)
        })

    }
}

async function fadeTextIn(spanifyFirst = false) {
    const spanSelector = '.word';
    if (spanifyFirst) { const spanifyIsDone = await spanify() } // not sure if this does anything
    // was put in for testing purposes - this function wasnt updating the text to animate properly.
    const words = $($(spanSelector).get());
    const vals = await animValueCalc(spanSelector);
    const delay = vals[0], duration = vals[1];

    // attempting to put spanify in here so it properly calls shit!!!
    let successMessage = function () {
        return 'Text animated in!'
    }
    animDuration = duration;
    words.each(function (index) {
        $(this).delay(index * delay).animate({ 'opacity': 1 }, duration);
        let elem = document.querySelector('#textBox');
        elem.scrollTop = elem.scrollHeight;
        animDuration += delay
    });
    // YAY ADDING THIS RETURN LINE FIXED IT!!!
    // Nothing was being waited on so I needed to return a promise that would resolve after the animduration
    // rather than setting a timeout.
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, animDuration);
    });

}

async function fadeTextOut(classToFade = '.word') {
    const words = $($(classToFade).get().reverse());
    const vals = animValueCalc(classToFade);
    const speed = vals[0], duration = vals[1], totalDuration = vals[2];
    words.each(function (index) {
        let fadeOutDelay = index * speed;
        $(this).delay(fadeOutDelay).animate({ 'opacity': 0 }, duration, function () {

        });
    });
    // Timeout for entire duration of this animation -- should make sure that the .delay() function doesn't block
    // or this will probably screw me up
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, totalDuration);
    });
}

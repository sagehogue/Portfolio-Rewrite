function wait(duration = 1000, shouldScrollPage=false) {
    if (shouldScrollPage) {
        this.scrollPageModal();
    }
    return new Promise((res, rej) => {
        // Probably don't need this commented stuff.
        // this.setState((oldState) => {
        //     return {
        //         ...oldState,
        //         typing: true
        //     }
        // })
        setTimeout(() => {
            // this.setState((oldState) => {
            //     return {
            //         ...oldState,
            //         typing: false
            //     }
            // })
            res('Successfully typed')
        }, duration)
    })
}

export default wait
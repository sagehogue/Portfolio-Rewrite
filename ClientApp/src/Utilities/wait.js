function wait(duration = 1000, shouldScrollPage=false) {
    if (shouldScrollPage) {
        this.scrollPageModal();
    }
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Successfully waited')
        }, duration)
    })
}

export default wait
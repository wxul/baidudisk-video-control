class Control {
    p = 5
    step = [0.1, 0.2, 0.5, 0.8, 1, 1.5, 2, 2.5, 3, 4, 5]
    constructor() {
        this.p = 5
    }
    control() {
        try {
            videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(this.step[this.p])
        } catch (error) {
            console.error(error)
        }
    }
    reset() {
        this.p = 5
        this.control()
    }
    increase() {
        this.p -= 1
        this.p = this.p < 0 ? 0 : this.p
        this.control()
    }
    decrease() {
        this.p += 1
        this.p = this.p >= this.step.length ? (this.step.length - 1) : this.p
        this.control()
    }
}

const _control = new Control()

window.addEventListener('keydown', e => {
    console.log('key', e, chrome)
    if (e.key === 'd' || e.key === 'D') {
        // decrease
        _control.decrease()
    } else if (e.key === 'a' || e.key === 'A') {
        // increase
        _control.increase()
    } else if (e.key === 's' || e.key === 'S') {
        // reset
        _control.reset()
    }
}, false)


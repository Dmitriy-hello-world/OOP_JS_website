export default class Slider {
    constructor({page= null,next = null, prev = null, teacher = null, autoplay = false, animate = false, active = null} = {}) {
        this.page = document.querySelector(page);
        try {this.slides = this.page.children;} catch(e) {}
        this.slideIndex = 0;
        this.next = document.querySelectorAll(next);
        this.prev = document.querySelectorAll(prev);
        this.teacher = document.querySelector(teacher);
        this.autoplay = autoplay;
        this.animate = animate;
        this.active = active;
    }
}
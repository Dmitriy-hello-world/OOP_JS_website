import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(page,next,prev,autoplay,animate,active) {
        super(page,next,prev,autoplay,animate,active);
    }
    setActive() {
        this.slides.forEach( slide => {
            slide.classList.remove(this.active);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        this.slides[0].classList.add(this.active);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }
    bindTriggers() {
        this.next.forEach( btn => {
            btn.addEventListener('click', () => {
                this.page.appendChild(this.slides[0]);
                if (this.active) {
                    this.setActive();
                }
            });
        });

        this.prev.forEach(btn => {
            btn.addEventListener('click', () => {
                let active = this.slides[this.slides.length - 1];
                this.page.insertBefore(active, this.slides[0]);
                if (this.active) {
                    this.setActive();
                }
            });
        });
    }
    render() {
        this.page.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        overflow: hidden;
        `;

        this.bindTriggers();
        this.setActive();
    }
}
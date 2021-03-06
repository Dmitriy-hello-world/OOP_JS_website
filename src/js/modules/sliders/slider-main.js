import Slider from "./slider";

export default class MainSLider extends Slider {
    constructor(page,next,prev,teacher) {
        super(page,next,prev,teacher);
    }
    plusSlideIndex(n) {
        this.slideIndex += n;
        if (this.slideIndex > this.slides.length - 1) {
            this.slideIndex = 0;
        }
        if (this.slideIndex < 0) {
            this.slideIndex = this.slides.length - 1;
        }
    }
    showSlides(n = 0) {
        this.plusSlideIndex(n);
        this.slides.forEach( slide => {
            slide.style.display = 'none';
            slide.classList.remove('fadeIn');
            slide.classList.add('animated');
        });

        this.slides[this.slideIndex].classList.add('fadeIn');
        this.slides[this.slideIndex].style.display = 'block';
        if(this.teacher) {
            if (this.slideIndex == 2) {
                setTimeout(() => {
                    this.teacher.classList.add('animated', 'fadeIn');
                    this.teacher.style.display = 'block';
                },3000);
            } else {
                this.teacher.classList.remove('animated', 'fadeIn');
                this.teacher.style.display = 'none';
            }
        }
    }

    bindTriggers() {
        this.next.forEach( btn => {
            btn.addEventListener('click', () => {
                this.showSlides(1);
        });
            btn.parentNode.previousElementSibling.addEventListener( 'click', e => {
                e.preventDefault();
                this.slideIndex = 0;
                this.showSlides();
            });
        });

        if(this.prev) {
            this.prev.forEach( btn => {
               btn.addEventListener('click', () => {
                   this.showSlides(-1);
               }); 
            });
        }
    }
    render() {
        if (this.page) {
            this.showSlides();
            this.bindTriggers();
        }
    }
}
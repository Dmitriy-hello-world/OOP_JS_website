import MainSLider from './modules/sliders/slider-main';
import MiniSlider from './modules/sliders/slider-mini';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSLider({page: '.page', next: '.next', teacher: '.hanson'});
    mainSlider.render();

    const showUpSlider = new MiniSlider({
        page: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        active: 'card-active',
        animate: true
    });
    showUpSlider.render();

    const modulesSlider = new MiniSlider({
        page: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        active: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.render();

    const feedSlider = new MiniSlider({
        page: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        active: 'feed__item-active',
    });
    feedSlider.render();

    const videoPlayer = new VideoPlayer('.play', '.overlay');
    videoPlayer.render();

    new Difference('.officerold .officer__card-item','.officerold .plus__content','fadeInLeft').render();
    new Difference('.officernew .officer__card-item','.officernew .plus__content','fadeInRight').render();
});
import MainSLider from './modules/sliders/slider-main';
import MiniSlider from './modules/sliders/slider-mini';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSLider({page: '.page', next: '.next', teacher: '.hanson'});
    mainSlider.render();

    const modulesPageSlider = new MainSLider({
        page: '.moduleapp',
        next: '.next',
        prev: '.prev'
    });
    modulesPageSlider.render();

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

    new VideoPlayer('.page .play', '.overlay').render();
    new VideoPlayer('.module__video-item .play', '.overlay').render();

    new Difference('.officerold .officer__card-item','.officerold .plus__content','fadeInLeft').render();
    new Difference('.officernew .officer__card-item','.officernew .plus__content','fadeInRight').render();

    new Form('form').render();

    new ShowInfo('.plus__content').render();

    new Download('.download').render();
});
import MainSLider from './modules/sliders/slider-main';
import MiniSlider from './modules/sliders/slider-mini';
import VideoPlayer from './modules/videoPlayer';

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

    const videoPlayer = new VideoPlayer('.play', '.overlay');
    videoPlayer.render();
});
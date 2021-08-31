import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page','.next','.hanson');
    slider.render();

    const videoPlayer = new VideoPlayer('.play', '.overlay');
    videoPlayer.render();
});
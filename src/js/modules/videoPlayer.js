export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTriggers() {
        this.triggers.forEach( (btn,i) => {
            if (btn.closest('.module__video-item')) {
                if (i % 2 !== 0) {
                    btn.closest('.module__video-item').setAttribute('data-blocked', 'true');
                }
            }

            btn.addEventListener('click', () => {
                if (btn.closest('.showup__video') || btn.closest('.video__play') || btn.closest('.module__video-item').getAttribute('data-blocked') !== 'true') {
                    this.overlay.style.display = 'flex';
                    this.activeBtn = btn;

                    if (!document.querySelector('iframe#frame')) {
                        this.path = btn.getAttribute('data-url');
                        this.playVideo(this.path);
                    } else {
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path});
                        }
                    }
                }
            });
        });

        this.close.addEventListener('click', () => {
            try {
                this.overlay.style.display = 'none';
                this.player.stopVideo();
            } catch(e) {}
        });
    }

    playVideo(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
          });
    }

    onPlayerStateChange(e) {
        try {
            const blockedBlock = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playSvg = this.activeBtn.querySelector('svg').cloneNode(true);

            if (e.data === 0) {
                if (blockedBlock.querySelector('.play__circle').classList.contains('closed') &&
                    blockedBlock.querySelector('.play__text').classList.contains('attention')) {

                    blockedBlock.querySelector('.play__circle').classList.remove('closed');
                    blockedBlock.querySelector('.play__text').classList.remove('attention');
                    blockedBlock.querySelector('svg').remove();
                    blockedBlock.querySelector('.play__circle').appendChild(playSvg);
                    blockedBlock.querySelector('.play__text').textContent = 'play video';
                    blockedBlock.style.opacity = '1';
                    blockedBlock.style.filter = 'none';
                    blockedBlock.setAttribute('data-blocked', 'false');
                }
            }
        } catch(e) {}
    }

    render() {
        if (this.triggers.length > 0) {
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bindTriggers();
        }
    }
}
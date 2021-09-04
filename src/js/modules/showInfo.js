export default class ShowInfo {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    render() {
        this.triggers.forEach(btn => {
            btn.addEventListener('click', () => {
                const infoBlock = btn.closest('.module__info-show').nextElementSibling;
                      infoBlock.classList.add('animated', 'fadeInDown');
                      infoBlock.style.marginTop = '3px';
                      infoBlock.classList.toggle('msg');
            });
        });
    }
}
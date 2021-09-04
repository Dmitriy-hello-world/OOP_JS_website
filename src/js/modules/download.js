export default class Download {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = '../../assets/img/mainbg.jpg';
    }

    downloada(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download','');
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        this.triggers.forEach( item => {
            item.addEventListener('click', e => {
                e.stopPropagation();
                this.downloada(this.path);
            });
        });  
    }
}
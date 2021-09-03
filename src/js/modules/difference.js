export default class Difference {
    constructor(items, plus, animation) {
        this.items = document.querySelectorAll(items);
        this.plus = document.querySelector(plus);
        this.animation = animation;
        this.counter = 0;
    }
    hideItems() {
        this.items.forEach( (item,i,arr) => {
            item.classList.add('animated');
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }
    showItem() {
        if (this.counter >= 2) {
            this.items[this.counter].classList.add(this.animation);
            this.items[this.counter].style.display = 'flex';
            this.items[this.items.length - 1].style.display = 'none';
        } else {
            this.items[this.counter].classList.add(this.animation);
            this.items[this.counter].style.display = 'flex';
            this.counter++;
        }
    }
    bindTriggers() {
        this.plus.addEventListener('click', () => {
            this.showItem();
        });
    }
    render() {
        try {
            this.hideItems();
            this.bindTriggers();
        } catch(e) {}
    }
}
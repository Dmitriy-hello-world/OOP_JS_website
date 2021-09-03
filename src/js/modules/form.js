export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll('input');
        this.mailInputs = document.querySelectorAll('[type="email"]');
        this.phoneInputs = document.querySelectorAll('[name="phone"]');
        this.message = {
            loading: 'Отправка..',
            succes: 'Все готово, ваши данные отправлены!',
            fail: 'Упс.. попробуйте еще раз',
        };
        this.url = '../assets/question.php';
    }
    async postData(data,url) {
        this.result = await fetch(url, {
            method: 'POST',
            body: data
        });
    
        return await this.result.text();  
    }
    clearInputs() {
        this.inputs.forEach( input => {
            input.value = '';
        });
    }
    textChecked() {    
        this.mailInputs.forEach( item => {
            item.addEventListener('keypress', e => {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                    item.value = ''; 
                } else {
                    item.value = item.value;
                }
            });
        });
    }
    mask() {
        function setCursosPossition(pos,el) {
            el.focus();
    
            el.addEventListener('click', () => {
                el.selectionStart = el.selectionEnd = pos;
            });
    
            if ( el.setSelectionRange) {
                el.setSelectionRange(pos, pos);
            } else if (el.createTextRange) {
                let range = el.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }
        function setMask(event) {
            let matrix = '+1 (___) ___ ____',
                i = 0,
                def = matrix.replace(/\D/ig, ''),
                val = this.value.replace(/\D/ig, '');
    
            if (val.length <= def.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursosPossition(this.value.length, this);
            }
        }  
        this.phoneInputs.forEach( item => {
            item.addEventListener('input', setMask);
            item.addEventListener('blur', setMask);
            item.addEventListener('focus', setMask);
        });
    }
    bindForms() {
        this.forms.forEach( form => {
            form.addEventListener('submit', e => {
                e.preventDefault();

                let statusBlock = document.createElement('div');
                statusBlock.style.cssText = `
                margin-top: 15px;
                font-size: 19px;
                color: grey;
                font-weight: 600;
                `;
                form.appendChild(statusBlock);

                this.formData = new FormData(form);
                statusBlock.textContent = this.message.loading;

                this.postData(this.formData,this.url)
                .then(res => {
                    console.log(res);
                })
                .catch(() => {
                    statusBlock.textContent = this.message.fail;
                })
                .finally(() => {
                    statusBlock.textContent = this.message.succes;
                    this.clearInputs();
                    setTimeout(() => {
                        statusBlock.remove();
                    },4000);
                });
            });
        });
    }

    render() {
        this.textChecked();
        this.mask();
        this.bindForms();
    }
}
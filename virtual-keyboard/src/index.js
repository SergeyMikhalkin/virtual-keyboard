let keysArrEn = [
    { id: 1, key: '\`', capitalized: '~', length: 1 },
    { id: 2, key: '1', capitalized: '!', length: 1 },
    { id: 3, key: '2', capitalized: '@', length: 1 },
    { id: 4, key: '3', capitalized: '#', length: 1 },
    { id: 5, key: '4', capitalized: '$', length: 1 },
    { id: 6, key: '5', capitalized: '%', length: 1 },
    { id: 7, key: '6', capitalized: '^', length: 1 },
    { id: 8, key: '7', capitalized: '&', length: 1 },
    { id: 9, key: '8', capitalized: '*', length: 1 },
    { id: 10, key: '9', capitalized: '(', length: 1 },
    { id: 11, key: '0', capitalized: ')', length: 1 },
    { id: 12, key: '-', capitalized: '_', length: 1 },
    { id: 13, key: '=', capitalized: '+', length: 1 },
    { id: 14, key: 'Backspace', hidden: 'Backspace', length: 2 },
    { id: 15, key: 'Tab', length: 2 },  
    { id: 16, key: 'q', capitalized: 'Q', length: 1 },
    { id: 17, key: 'w', capitalized: 'W', length: 1 }, 
    { id: 18, key: 'e', capitalized: 'E', length: 1 }, 
    { id: 19, key: 'r', capitalized: 'R', length: 1 }, 
    { id: 20, key: 't', capitalized: 'T', length: 1 }, 
    { id: 21, key: 'y', capitalized: 'Y', length: 1 }, 
    { id: 22, key: 'u', capitalized: 'U', length: 1 }, 
    { id: 23, key: 'i', capitalized: 'I', length: 1 }, 
    { id: 24, key: 'o', capitalized: 'O', length: 1 }, 
    { id: 25, key: 'p', capitalized: 'P', length: 1 },
    { id: 26, key: '[', capitalized: '{', length: 1 }, 
    { id: 27, key: ']', capitalized: '}', length: 1 },  
    { id: 28, key: 'Del', hidden: 'Delete', length: 1 },
    { id: 29, key: 'Caps Lock', hidden: 'CapsLock', length: 2 },
    { id: 30, key: 'a', capitalized: 'A', length: 1 },
    { id: 31, key: 's', capitalized: 'S', length: 1 },
    { id: 32, key: 'd', capitalized: 'D', length: 1 }, 
    { id: 33, key: 'f', capitalized: 'F', length: 1 },
    { id: 34, key: 'g', capitalized: 'G', length: 1 },
    { id: 35, key: 'h', capitalized: 'H', length: 1 },
    { id: 36, key: 'j', capitalized: 'J', length: 1 },
    { id: 37, key: 'k', capitalized: 'K', length: 1 },
    { id: 38, key: 'l', capitalized: 'L', length: 1 },
    { id: 39, key: ';', capitalized: ':', length: 1 },
    { id: 40, key: '\'', capitalized: '\"', length: 1 },
    { id: 41, key: 'Enter', length: 2 },
    { id: 42, key: 'Shift', hidden: "ShiftLeft", length: 2 },
    { id: 43, key: 'z', capitalized: 'Z', length: 1 },
    { id: 44, key: 'x', capitalized: 'X', length: 1 },
    { id: 45, key: 'c', capitalized: 'C', length: 1 },
    { id: 46, key: 'v', capitalized: 'V', length: 1 },
    { id: 47, key: 'b', capitalized: 'B', length: 1 },
    { id: 48, key: 'n', capitalized: 'N', length: 1 },
    { id: 49, key: 'm', capitalized: 'N', length: 1 },
    { id: 50, key: ',', capitalized: 'M', length: 1 },
    { id: 51, key: '.', capitalized: '<', length: 1 },
    { id: 52, key: '/', capitalized: '>', length: 1 },
    { id: 53, key: '&uarr;', length: 1 },
    { id: 54, key: 'Shift', hidden: 'ShiftRight', length: 2 },
    { id: 55, key: 'Ctrl', hidden: 'ControlLeft', length: 1 },         
    { id: 56, key: 'Win', length: 1 },
    { id: 57, key: 'Alt', hidden: 'AltLeft', length: 1 },
    { id: 58, key: 'Space', length: 7 },
    { id: 59, key: 'Alt', hidden: 'AltRight', length: 1 },
    { id: 60, key: '&larr;', length: 1 },
    { id: 61, key: '&darr;', length: 1 },
    { id: 62, key: '&rarr;', length: 1 },
    { id: 63, key: 'Ctrl', hidden: 'ControlRight', length: 1 }
];

let keysArrRu = [
    { id: 1, key: 'ё', capitalized: 'Ё', length: 1 },
    { id: 2, key: '1', capitalized: '!', length: 1 },
    { id: 3, key: '2', capitalized: '\"', length: 1 },
    { id: 4, key: '3', capitalized: '№', length: 1 },
    { id: 5, key: '4', capitalized: ';', length: 1 },
    { id: 6, key: '5', capitalized: '%', length: 1 },
    { id: 7, key: '6', capitalized: ':', length: 1 },
    { id: 8, key: '7', capitalized: '?', length: 1 },
    { id: 9, key: '8', capitalized: '*', length: 1 },
    { id: 10, key: '9', capitalized: '(', length: 1 },
    { id: 11, key: '0', capitalized: ')', length: 1 },
    { id: 12, key: '-', capitalized: '_', length: 1 },
    { id: 13, key: '=', capitalized: '+', length: 1 },
    { id: 14, key: 'Backspace', hidden: 'Backspace', length: 2 },
    { id: 15, key: 'Tab', length: 2 },  
    { id: 16, key: 'й', capitalized: 'Й', length: 1 },
    { id: 17, key: 'ц', capitalized: 'Ц', length: 1 }, 
    { id: 18, key: 'у', capitalized: 'У', length: 1 }, 
    { id: 19, key: 'к', capitalized: 'К', length: 1 }, 
    { id: 20, key: 'е', capitalized: 'Е', length: 1 }, 
    { id: 21, key: 'н', capitalized: 'Н', length: 1 }, 
    { id: 22, key: 'г', capitalized: 'Г', length: 1 }, 
    { id: 23, key: 'ш', capitalized: 'Ш', length: 1 }, 
    { id: 24, key: 'щ', capitalized: 'Щ', length: 1 }, 
    { id: 25, key: 'з', capitalized: 'З', length: 1 },
    { id: 26, key: 'х', capitalized: 'Х', length: 1 }, 
    { id: 27, key: 'ъ', capitalized: 'Ъ', length: 1 },  
    { id: 28, key: 'Del', hidden: 'Delete', length: 1 },
    { id: 29, key: 'Caps Lock', hidden: 'CapsLock', length: 2 },
    { id: 30, key: 'ф', capitalized: 'Ф', length: 1 },
    { id: 31, key: 'ы', capitalized: 'Ы', length: 1 },
    { id: 32, key: 'в', capitalized: 'В', length: 1 }, 
    { id: 33, key: 'а', capitalized: 'А', length: 1 },
    { id: 34, key: 'п', capitalized: 'П', length: 1 },
    { id: 35, key: 'р', capitalized: 'Р', length: 1 },
    { id: 36, key: 'о', capitalized: 'О', length: 1 },
    { id: 37, key: 'л', capitalized: 'Л', length: 1 },
    { id: 38, key: 'д', capitalized: 'Д', length: 1 },
    { id: 39, key: 'ж', capitalized: 'Ж', length: 1 },
    { id: 40, key: 'э', capitalized: 'Э', length: 1 },
    { id: 41, key: 'Enter', length: 2 },
    { id: 42, key: 'Shift', hidden: "ShiftLeft", length: 2 },
    { id: 43, key: 'я', capitalized: 'Я', length: 1 },
    { id: 44, key: 'ч', capitalized: 'Ч', length: 1 },
    { id: 45, key: 'с', capitalized: 'С', length: 1 },
    { id: 46, key: 'м', capitalized: 'М', length: 1 },
    { id: 47, key: 'и', capitalized: 'И', length: 1 },
    { id: 48, key: 'т', capitalized: 'Т', length: 1 },
    { id: 49, key: 'ь', capitalized: 'Ь', length: 1 },
    { id: 50, key: 'б', capitalized: 'Б', length: 1 },
    { id: 51, key: 'ю', capitalized: 'Ю', length: 1 },
    { id: 52, key: '.', capitalized: '.', length: 1 },
    { id: 53, key: '&uarr;', length: 1 },
    { id: 54, key: 'Shift', hidden: 'ShiftRight', length: 2 },
    { id: 55, key: 'Ctrl', hidden: 'ControlLeft', length: 1 },         
    { id: 56, key: 'Win', length: 1 },
    { id: 57, key: 'Alt', hidden: 'AltLeft', length: 1 },
    { id: 58, key: 'Space', length: 7 },
    { id: 59, key: 'Alt', hidden: 'AltRight', length: 1 },
    { id: 60, key: '&larr;', length: 1 },
    { id: 61, key: '&darr;', length: 1 },
    { id: 62, key: '&rarr;', length: 1 },
    { id: 63, key: 'Ctrl', hidden: 'ControlRight', length: 1 }
];

let keysArr = keysArrEn;

let capsLock = false;
let lang = 'en';

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
      switchLang();
    }
    else lang = 'en';
}

document.addEventListener('DOMContentLoaded', function (e) {

    let main = document.createElement('div');
    main.classList.add('main');

    let form = document.createElement('form');

    let input = document.createElement('textarea');
    input.autofocus = true;
    input.classList.add('textarea');
    form.append(input);
    main.append(form);

    let keyBoard = document.createElement('div');
    keyBoard.classList.add('keyboard');
    let row = 0;
    let rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let i = 0; i < keysArr.length; i++) {
        if(row === 15) {
            keyBoard.append(rowElement);
            rowElement = document.createElement('div');
            rowElement.classList.add('row');
            row = 0;
        }
        let key = document.createElement('div');
        key.classList.add('key');
        key.dataset.key = keysArr[i].key;
        if(keysArr[i].hasOwnProperty('hidden')) key.dataset.hidden = keysArr[i].hidden;
        if(keysArr[i].hasOwnProperty('capitalized')) key.dataset.capital = keysArr[i].capitalized;
        if(keysArr[i].hasOwnProperty('id')) key.dataset.id = keysArr[i].id;
        key.addEventListener('click', addChar);
        key.style.flex = keysArr[i].length;
        if(keysArr[i].key !== 'Space') key.innerHTML = keysArr[i].key;
        rowElement.append(key);
        row += keysArr[i].length;
    }
    keyBoard.append(rowElement);
    main.append(keyBoard);
    
    let os = document.createElement('p');
    os.classList.add('os');
    os.innerHTML = 'Клавиатура создана в операционной системе Windows';
    main.append(os);

    let switchLang = document.createElement('p');
    switchLang.classList.add('switch-lang');
    switchLang.innerHTML = 'Переключение языка: левый Shift + Alt';
    main.append(switchLang);

    document.body.prepend(main);

    document.addEventListener('keydown', onKeyEvent);

    getLocalStorage();
});

function onKeyEvent(event) {

    if(event.shiftKey && event.altKey) {
        if(lang == 'en') lang = 'ru';
        else lang = 'en';
        localStorage.setItem('lang', lang);
        switchLang();
    }
    
    switch (event.key) {
        case ' ':
            onClick('Space');
            break;
        case 'Meta':
            onClick('Win');
            break;
        case 'Delete':
            onClick('Del');
            break;
        case 'CapsLock': 
            onClick('CapsLock', true);
            break;
        case 'ArrowUp':
            onClick('&uarr;');
            break;
        case 'ArrowDown':
            onClick('&darr;');
            break;
        case 'ArrowLeft':
            onClick('&larr;');
            break;
        case 'ArrowRight':
            onClick('&rarr;');
            break;
        case 'Control':
            if(event.code === 'ControlLeft') {
                onClick('ControlLeft', true);
            }
            else {
                onClick('ControlRight', true);
            }
            break;
        case 'Alt':
            if(event.code === 'AltLeft') {
                onClick('AltLeft', true);
            }
            else {
                onClick('AltRight', true);
            }
            break;
        case 'Shift':
            if(event.code === 'ShiftLeft') {
                onClick('ShiftLeft', true);
            }
            else {
                onClick('ShiftRight', true);
            }
            break;
        default:
            onClick(event.key);
            break;
    }
}

function onClick(key, ctrl = false) {
    let keyPressed;
    if(ctrl) keyPressed = document.querySelector(`[data-hidden="${key}"]`);
    else {
        if(capsLock) keyPressed = document.querySelector(`[data-capital="${key}"]`);
        else keyPressed = document.querySelector(`[data-key="${key}"]`);
    }

    if(key === 'ShiftLeft' || key === 'ShiftRight') {
        if(keyPressed.classList.contains('active')) return;
        keyPressed.classList.add('active');
        capsLock = capsLock ? false : true;
        let keys = document.querySelectorAll('.key');
            for(let i = 0; i < keys.length; i++) {            
                if(keys[i].dataset.capital == undefined) continue;
                if(capsLock) {
                    keys[i].innerHTML = keys[i].dataset.capital;
                } else {
                    keys[i].innerHTML = keys[i].dataset.key;
                }
            }
    }

    if(key !== 'CapsLock') {
        keyPressed.classList.add('active');
        setTimeout(() => {
            keyPressed.classList.remove('active');
        }, 200); 
        return;
    } else {
        capsLock = capsLock ? false : true;
        if(capsLock) keyPressed.classList.add('active');
        else keyPressed.classList.remove('active');

        let keys = document.querySelectorAll('.key');
        for(let k of keys) {
            if(k.dataset.capital === undefined) continue;
            if(capsLock) {
                k.innerHTML = k.dataset.capital;
            } else {
                k.innerHTML = k.dataset.key;
            }
        }
    }
}

document.addEventListener('keyup', (event) => {  
    if(event.key === 'Shift') {
        let keyPressed = document.querySelector(`[data-hidden="${event.code}"]`);
        keyPressed.classList.toggle('active');
        capsLock = capsLock ? false : true;
        let keys = document.querySelectorAll('.key');
        for(let k of keys) {
            if(k.dataset.capital === undefined) continue;
            if(capsLock) {
                k.innerHTML = k.dataset.capital;
            } else {
                k.innerHTML = k.dataset.key;
            }
        }
    }
});

function addChar(event) {
    let key;
    let input = document.querySelector('textarea');
    if(this.dataset.hidden === undefined) {
        key = capsLock & this.dataset.capital !== undefined ? this.dataset.capital : this.dataset.key;
        switch (key) {
            case 'Tab':
                key = '\t';
                break;
            case 'Enter':
                key = '\n';
                break;
            case 'Space':
                key = ' ';
                break;
            case '&uarr;': 
                key = '↑';
                break;
            case '&rarr;': 
                key = '→';
                break;
            case '&darr;': 
                key ='↓';
                break;
            case '&larr;': 
                key = '←';
                break;
            case 'Win': 
                return;
                break;
            default:
                break;
        }
        if(input.selectionStart == input.selectionEnd){
            let index = input.selectionStart;
            if(index == 0) input.value += key;
            else {
                let str = input.value;
                input.value = str.substring(0, index) + key + str.substring(index, input.value.length);
                let foo = index++;
                input.setSelectionRange(foo + 1, foo + 1);
            }
        }    
    }
    else {
        let index = input.selectionStart;
        let keys = document.querySelectorAll('.key');
        switch (this.dataset.hidden) {
            case 'Backspace':
                if(input.selectionStart != 0) { 
                    input.value = input.value.substring(0, input.selectionStart - 1) + input.value.substring(input.selectionStart);
                    input.setSelectionRange(index - 1, index - 1);
                }
                break;
            case 'Delete': 
                if(input.value.length != 0) { 
                    input.value = input.value.substring(0, input.selectionStart) + input.value.substring(input.selectionStart + 1);
                    input.setSelectionRange(index, index);
                }
                break;
            case 'CapsLock':
                capsLock = capsLock ? false : true;
                let capsLockKey = document.querySelector('[data-key="Caps Lock"]');
                if(capsLock) capsLockKey.classList.add('active');
                else capsLockKey.classList.remove('active');

                for(let k of keys) {
                if(k.dataset.capital === undefined) continue;
                    if(capsLock) {
                        k.innerHTML = k.dataset.capital;
                    } else {
                        k.innerHTML = k.dataset.key;
                    }
                }
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                    capsLock = capsLock ? false : true;
                    for(let i = 0; i < keys.length; i++) {            
                        if(keys[i].dataset.capital == undefined) continue;
                            if(capsLock) {
                                keys[i].innerHTML = keys[i].dataset.capital;
                            } else {
                                keys[i].innerHTML = keys[i].dataset.key;
                            }
                        }
                }, 200); 
                capsLock = capsLock ? false : true;
                
                for(let i = 0; i < keys.length; i++) {            
                if(keys[i].dataset.capital == undefined) continue;
                    if(capsLock) {
                        keys[i].innerHTML = keys[i].dataset.capital;
                    } else {
                        keys[i].innerHTML = keys[i].dataset.key;
                    }
                }
                break;
            default:
                break;
        }
    }
}

function switchLang() {   
    if(lang == 'en') keysArr = keysArrEn;
    else keysArr = keysArrRu;

    let keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
        let currId = keys[i].dataset.id;
        let newKey;
        for(let elem of keysArr) {
            if(elem.id == currId) {
                newKey = elem;         
                break;
            }
        }       
        keys[i].dataset.key = newKey.key;
        if(newKey.hasOwnProperty('hidden')) keys[i].dataset.hidden = newKey.hidden;
        if(newKey.hasOwnProperty('capitalized')) keys[i].dataset.capital = newKey.capitalized;
        keys[i].addEventListener('click', addChar);
        if(keys[i].dataset.key !== 'Space') keys[i].innerHTML = newKey.key;
    }
}
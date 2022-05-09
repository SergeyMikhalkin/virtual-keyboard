let keysArr = [
    { key: '\`', capitalized: '~', length: 1 },
    { key: '1', capitalized: '!', length: 1 },
    { key: '2', capitalized: '@', length: 1 },
    { key: '3', capitalized: '#', length: 1 },
    { key: '4', capitalized: '$', length: 1 },
    { key: '5', capitalized: '%', length: 1 },
    { key: '6', capitalized: '^', length: 1 },
    { key: '7', capitalized: '&', length: 1 },
    { key: '8', capitalized: '*', length: 1 },
    { key: '9', capitalized: '(', length: 1 },
    { key: '0', capitalized: ')', length: 1 },
    { key: '-', capitalized: '_', length: 1 },
    { key: '=', capitalized: '+', length: 1 },
    { key: 'Backspace', hidden: 'Backspace', length: 2 },
    { key: 'Tab', length: 2 },  
    { key: 'q', capitalized: 'Q', length: 1 },
    { key: 'w', capitalized: 'W', length: 1 }, 
    { key: 'e', capitalized: 'E', length: 1 }, 
    { key: 'r', capitalized: 'R', length: 1 }, 
    { key: 't', capitalized: 'T', length: 1 }, 
    { key: 'y', capitalized: 'Y', length: 1 }, 
    { key: 'u', capitalized: 'U', length: 1 }, 
    { key: 'i', capitalized: 'I', length: 1 }, 
    { key: 'o', capitalized: 'O', length: 1 }, 
    { key: 'p', capitalized: 'P', length: 1 },
    { key: '[', capitalized: '{', length: 1 }, 
    { key: ']', capitalized: '}', length: 1 },  
    { key: 'Del', hidden: 'Delete', length: 1 },
    { key: 'Caps Lock', hidden: 'CapsLock', length: 2 },
    { key: 'a', capitalized: 'A', length: 1 },
    { key: 's', capitalized: 'S', length: 1 },
    { key: 'd', capitalized: 'D', length: 1 }, 
    { key: 'f', capitalized: 'F', length: 1 },
    { key: 'g', capitalized: 'G', length: 1 },
    { key: 'h', capitalized: 'H', length: 1 },
    { key: 'j', capitalized: 'J', length: 1 },
    { key: 'k', capitalized: 'K', length: 1 },
    { key: 'l', capitalized: 'L', length: 1 },
    { key: ';', capitalized: ':', length: 1 },
    { key: '\'', capitalized: '\"', length: 1 },
    { key: 'Enter', length: 2 },
    { key: 'Shift', hidden: "ShiftLeft", length: 2 },
    { key: 'z', capitalized: 'Z', length: 1 },
    { key: 'x', capitalized: 'X', length: 1 },
    { key: 'c', capitalized: 'C', length: 1 },
    { key: 'v', capitalized: 'V', length: 1 },
    { key: 'b', capitalized: 'B', length: 1 },
    { key: 'n', capitalized: 'N', length: 1 },
    { key: 'm', capitalized: 'N', length: 1 },
    { key: ',', capitalized: 'M', length: 1 },
    { key: '.', capitalized: '<', length: 1 },
    { key: '/', capitalized: '>', length: 1 },
    { key: '&uarr;', length: 1 },
    { key: 'Shift', hidden: 'ShiftRight', length: 2 },
    { key: 'Ctrl', hidden: 'ControlLeft', length: 1 },         
    { key: 'Win', length: 1 },
    { key: 'Alt', hidden: 'AltLeft', length: 1 },
    { key: 'Space', length: 7 },
    { key: 'Alt', hidden: 'AltRight', length: 1 },
    { key: '&larr;', length: 1 },
    { key: '&darr;', length: 1 },
    { key: '&rarr;', length: 1 },
    { key: 'Ctrl', hidden: 'ControlRight', length: 1 }
];

let capsLock = false;

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
});

function onKeyEvent(event) {
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
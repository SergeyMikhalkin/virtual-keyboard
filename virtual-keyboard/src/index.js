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
    { key: 'Backspace', length: 2 },
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
    { key: 'Del', length: 1 },
    { key: 'Caps Lock', length: 2 },
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
    { key: 'Shift', length: 2 },
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
    { key: 'Shift', length: 2 },
    { key: 'Ctrl', length: 1 },         
    { key: 'Win', length: 1 },
    { key: 'Alt', length: 1 },
    { key: 'Space', length: 7 },
    { key: 'Alt', length: 1 },
    { key: '&larr;', length: 1 },
    { key: '&darr;', length: 1 },
    { key: '&rarr;', length: 1 },
    { key: 'Ctrl', length: 1 }
];

document.addEventListener('DOMContentLoaded', function () {

    let main = document.createElement('div');
    main.classList.add('main');

    let form = document.createElement('form');

    let input = document.createElement('textarea');
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
});
/**
 * ДЗ-03 
 */

/**
 * 0. Исправь ошибки
 */
function initVal(str) {
    let s = 'String';
    let a = 10;
    let b = true;
    const c = 'const';
}

/**
 * 1. Напиши функцию которая принимает на вход строку и преобразует ее в строку
 * @param {string} str 
 * 
 * @returns (number)
 */
function stringToNumber(str) {
    return parseInt(str, 10);
}

/**
 * 2. Функции возвращают значение val, если оно существует, иначе def
 * @param {*} val
 * @param {*} def
 * 
 * @returns val или def
 */
function checkVal1 (val, def) {
    // 2.1. if ... else
    if (val == 0) {
        return def;
    }
    else {
        return val;
    }
}

function checkVal2 (val, def) {
    // 2.2. тернарный оператор
    return output = (val == 0) ? def : val;
}

function checkVal3 (val, def) {
    // 2.3. логическое или
    if (val || 0) {
        return val;
    }
    else {
        return def;
    }
}

/**
 * 3. Фунция рендера
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * @param {bool} isBox
 * 
 * @returns {string} строка формата 'Товар title, шириной width, высотой height, коробка' или '... не коробка'
 */
function renderItem (title, width, height, isBox) {
    if (!!(width) === false) width = 0;
    if (!!(height) === false) height = 0;
    if (!!(title) === false) title = '';
    return ('Товар ' + String(title) + ', шириной ' + Number(width) + ', высотой ' + Number(height) + (isBox ? ', коробка' : ', не коробка'))    
}


/**
 * 4. Напиши функцию oddNum с помощью цикла for
 * @param {number} max максимальное число
 * 
 * @returns {string} только не четные 1 3 5 7 9 ...max 
 */

 //Не знаю как без массива вывести сразу несколько значений через for в функции
 //Ответы массив выдает правильные
 //Вывод массива не стал делать чтобы подгонялся под вывод в тестах
function oddNum (max) {
    let arr = [];
    for(let i = 0; i <= max; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }   
    return arr;
}


/**
 * 5. Напиши функцию factorial рекурсивно
 * @param {number} n максимальное число для вычисления
 * 
 * @returns {number} факториал 
 */
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}


module.exports = {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
};

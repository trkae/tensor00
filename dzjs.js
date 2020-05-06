// Функция получения рандомного числа
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


// Массив 1
let arr1 = [];
let max = 100;

let randNum;                     
while (arr1.length < max) {
    randNum = randomNumber(1, max); 
    if (arr1.indexOf(randNum) == -1) {         
        arr1.push(randNum);        
    }
 }
console.log(arr1); 

// Массив 2
let arr2 = arr1.map((n) => n);
arr2.reverse();
console.log(arr2);

// Массив 3
let arr3 = [];
let i = 0;
while (i < arr1.length) {
    output = arr1[i] - arr2[i];
    arr3.push(output);
    i++;
}
console.log(arr3);

//Cреднее арифметическое значение всех элементов arr3
let averageSum = (arr3.reduce( function(acc, n) {return acc + n;} )) / arr3.length;
console.log(averageSum);


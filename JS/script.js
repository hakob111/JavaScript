// alert("hello");
//let result = comfirm("Are you heare?");
//"use strict";
// let numberofFiles = prompt("How meny films have you woched", "");

// personalMovieDB = {
//     count: numberofFiles,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false
// };
//  let lastFilm = prompt("One of the last films which you have woched", "");
//  let filmPoint = prompt("How much would you rate it", "");
//  let lastFilm2 = prompt("One of the last films which you have woched", "");
//  let filmPoint2 = prompt("How much would you rate it", "");
//  personalMovieDB["movies"][lastFilm] = filmPoint;
//  personalMovieDB["movies"][lastFilm2] = filmPoint2;

//  console.log(personalMovieDB);

/*home work 2
console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);
console.log( true || 5);
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
*/
/* my solution 
let result = '';
const length = 6; 

for(let i = 0; i < length; i++){
      result += '*';
      console.log(result);
   //result += '\n';
}
*/

/* mentor solution

let result = '';
const length = 7;

for (let i = 1; i < 7; i++){
   for (let j=0; j < i; j++){
      result += '*';
   }
   result += '\n';
}
console.log(result);*/
// Exercise
// for (let i= 5; i < 11; i++){
//    console.log(i);
// } 

// let i = 2;
//     while (i <= 16){
//         if (i % 2 === 0) {
//             i++
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }

// const arrayOfNumbers = [];
//    let index = 0;
//    for (let i = 5; i <= 10; i++){
//       arrayOfNumbers[index] = i;
//       index++;
//    }

// console.log(arrayOfNumbers)
// for (let i = 20; i > 9; i--){
//    if(i === 13) break;
//    console.log(i);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++){
//       console.log(typeof(arr[i]));
//     }

// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
// for (let i = 0; i < data.length; i++){
//    if (typeof(data[i]) === 'number'){
//       data[i] *= 2;
//    } else if(typeof(data[i]) === 'string'){
//          data[i] += ' - done';
//    }
// }

// console.log(data)

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i <= data.length - 1; i++){
//         result[i] = data[(data.length - 1) - i]; 
//     }
    
//     // Не трогаем
//   console.log(result);

// let a = "9";
// console.log(a);
// for (let i = 1; i < 5; i++){
//    a += " " ;
// }
// console.log(a);

const lines = 5;
let result = '';
let spaces = lines + 1;
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++)
   {
      for (let j = 0; j < lines - i; j++)
         {
            if(j == 0)
            {
               for (let k = lines - i; k > 0; k--)
               {
                  result = ' ' + result;
                  spaces--;
               }
               result += '*';
            } 
         else 
         {
            for (let l = lines - i; l > 0; l--)
            {
               result = ' ' + result;
               spaces--;
            } 
            result += '**';
        }
        spaces = lines + 1;
      }
   result += '\n';
}

console.log(result)
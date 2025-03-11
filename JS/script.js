// alert("hello");
//let result = comfirm("Are you heare?");
//"use strict";
let numberofFiles = prompt("How meny films have you woched", "");

personalMovieDB = {
    count: numberofFiles,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};
 let lastFilm = prompt("One of the last films which you have woched", "");
 let filmPoint = prompt("How much would you rate it", "");
 let lastFilm2 = prompt("One of the last films which you have woched", "");
 let filmPoint2 = prompt("How much would you rate it", "");
 personalMovieDB["movies"][lastFilm] = filmPoint;
 personalMovieDB["movies"][lastFilm2] = filmPoint2;

 console.log(personalMovieDB);
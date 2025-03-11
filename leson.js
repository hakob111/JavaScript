// alert("hello");
//let result = comfirm("Are you heare?");
"use strict";
let numberofFiles = prompt("How meny films have you woched", "0");

personalMovieDB = {
    count: numberofFiles,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};
 let lastFilm = promt("One of the last films which you have woched", "");
 let filmPoint = prompt("How much would you rate it", "0");
 personalMovieDB["movies"][lastFilm] = filmPoint;
 let lastFilm2 = promt("One of the last films which you have woched", "");
 let filmPoint2 = prompt("How much would you rate it", "0");
 personalMovieDB["movies"][lastFilm2] = filmPoint2;
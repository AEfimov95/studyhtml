 "use strict";

let openWindow = document.querySelector(".callme_button");
let callWindow = document.querySelector(".callme");
let closeWindow = document.querySelector(".close");
let all = document.querySelector(".all");
let mini = document.querySelector(".mini");
let prem = document.querySelector(".prem");
let king = document.querySelector(".king");
let btnmini = document.querySelector(".btnmini");
let btnprem = document.querySelector(".btnprem");
let btnking = document.querySelector(".btnking");
openWindow.addEventListener("click",function (evt) {
    evt.preventDefault();
    callWindow.classList.add("callmeop");
});
closeWindow.addEventListener("click", function () {
    callWindow.classList.remove("callmeop");
});
btnmini.addEventListener("click",function () {
    mini.classList.add("choose");
    all.classList.remove("choose");
    prem.classList.remove("choose");
    king.classList.remove("choose");
});
btnprem.addEventListener("click",function () {
    prem.classList.add("choose");
    all.classList.remove("choose");
    mini.classList.remove("choose");
    king.classList.remove("choose");
});
btnking.addEventListener("click",function () {
    king.classList.add("choose");
    all.classList.remove("choose");
    prem.classList.remove("choose");
    mini.classList.remove("choose");
});

// const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели', ' ');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt ('Один из последних просмотренных фильмов',''),
//       b = prompt ('На сколько оцените его?',''),
//       c = prompt ('Один из последних просмотренных фильмов',''),
//       d = prompt ('На сколько оцените его?','');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
// switch (king) {
//     case king.classList.contains("king"):
//         console.log ("cодержит кинг");
//         break;
//     case ("center"):
//         console.log ('содержит центр');
//         break;
//     default:
//         console.log ('я не работаю');
//         break;
// }
// if (king.classList.contains("choose")){
//     console.log('содержит choose');
// }else { console.log('не содержит');
// }
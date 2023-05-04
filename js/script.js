/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* 'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


movieDB.movies.sort()

let promo__adv = document.querySelectorAll(".promo__adv img");

for (let img of promo__adv) {
  img.style.display = "none";
}



let promo__interactive = document.querySelector('.promo__interactive-list')

promo__interactive.innerHTML = ''

for(let item of movieDB.movies) {
    console.log();
    let promo__interactive_item = document.createElement('li')
    let promo__interactive_item_ = document.createElement('ol')

    promo__interactive_item_.classList.add('promo__interactive-item')
    promo__interactive_item_.innerHTML = item
    promo__interactive.append(promo__interactive_item)

    promo__interactive_item.append(promo__interactive_item_)
}








let bg = document.querySelector('.promo__bg')
bg.style.backgroundImage = "url(./img/bg.jpg)"


let alish = document.querySelector('.promo__genre')
alish.innerHTML = 'ДРАМА'



let act = document.querySelectorAll('.promo__menu-item')

act.forEach(btn => {


    btn.onclick = () => {
        act.forEach(el => el.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    }
});



console.log(act);

 */
let bg = document.querySelector('.promo__bg')
bg.style.backgroundImage = "url(./img/bg.jpg)"
console.log(bg);

/* bg.style.backgroundImage = "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/ant-man-2015-3_1.jpg"
 */
let FILMS_WATCHED = []
for (let s of movies) {
    if (!FILMS_WATCHED.includes(s.Title)) {
        FILMS_WATCHED.push(s.Title)
    }
}

let promo__interactive = document.querySelector('.promo__interactive-list')

for (let item of movies) {
    let promo__interactive_item = document.createElement('li')

    promo__interactive_item.classList.add('promo__interactive-item')
    promo__interactive_item.innerHTML = item.Title
    promo__interactive.append(promo__interactive_item)

    promo__interactive_item.onclick = () => {
        bg.style.backgroundImage = `url(${item.Poster})`
        bg.classList.add('active')
    }
    let delite = document.createElement('div')
    promo__interactive_item.append(delite)
    delite.classList.add('delete')
    delite.onclick = () => {
        promo__interactive_item.remove()
        console.log('click');
    }
}






let genres = []

for (let i of movies) {
    if (!genres.includes(i.Genre)) {
        genres.push(i.Genre)
    }
}

let genre = document.querySelector('.genre')
for (let i of genres) {
    let promo__menu_item = document.createElement('li')
    promo__menu_item.classList.add('promo__menu-item')
    promo__menu_item.innerHTML = i
    genre.append(promo__menu_item)

}

let promo__adv = document.querySelectorAll(".promo__adv img");

for (let img of promo__adv) {
    img.remove()
}



let alish = document.querySelector('.promo__genre')
alish.innerHTML = 'ДРАМА'

let act = document.querySelectorAll('.promo__menu-item')

act.forEach(btn => {


    btn.onclick = () => {
        act.forEach(el => el.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    }
});
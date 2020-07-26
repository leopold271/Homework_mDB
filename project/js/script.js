/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('div.promo__adv > img'),
    genre = document.querySelector('div.promo__genre'),
    //drama = document.createElement('div'),
    bcg = document.querySelector('div.promo__bg'),
    listOfFilms = document.querySelector('ul.promo__interactive-list');

promo.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';
// drama.innerHTML = 'Драма';
// drama.classList.add('promo__genre');
// genre.replaceWith(drama);

bcg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';
bcg.style.position = 'top';


listOfFilms.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    //listOfFilms[i] = item[i];
    listOfFilms.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
    </li>
    `;
});
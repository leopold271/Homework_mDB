'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        bcg = document.querySelector('div.promo__bg'),
        listOfFilms = document.querySelector('ul.promo__interactive-list'),
        formOfFilms = document.querySelector('.add'),
        inputFilm = formOfFilms.querySelector('.adding__input'),
        checkbox = formOfFilms.querySelector('[type=checkbox]');

    const deletePromo = (arr) => {
        promo.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';
        bcg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    deletePromo(promo);
    makeChanges();

    listOfFilms.innerHTML = '';

    createMovieList(movieDB.movies, listOfFilms);

    formOfFilms.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = inputFilm.value;
        if (newFilm.length > 21) {
            newFilm = newFilm.slice(0, 21);
            newFilm += '...';
        }
        if (newFilm !== '' && isNaN(newFilm)) {
            movieDB.movies.push(newFilm);
        }
        sortArr(movieDB.movies);
        if (checkbox.checked) {
            console.log("Added to favorite films");
        }
        createMovieList(movieDB.movies, listOfFilms);
        e.target.reset();
    });

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(movieDB.movies);
        films.forEach((item, i) => {
            listOfFilms.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${item}
                <div class="delete"></div>
            </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, listOfFilms);
            });
        });
    }

});
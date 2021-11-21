function filterMovies(wordInMovieTitle) {
    const newArray = [];
    movies.forEach(function (item) {
        if (item.Title.indexOf(wordInMovieTitle) > -1) {
            newArray.push(item)
        }
    })
    addMoviesToDom(newArray)
}

function filterLatestMovies() {
    const newArray = [];
    movies.forEach(function (item) {
        if (item.Year >= 2014) {
            newArray.push(item)
        }
    })
    addMoviesToDom(newArray)
}

function createLink(imdbID) {
    const imdbLink = " https://www.imdb.com/title/" + imdbID
    return imdbLink
}

const addMoviesToDom = (newArray) => {
    const filmSelection = document.querySelector('#film-selection')
    filmSelection.innerHTML = ""
    const addLi = (item) => {
        const filmItem = document.createElement("li")
        filmItem.classList.add("container-item")
        const filmA = document.createElement("a")
        filmA.setAttribute("href", createLink(item.imdbID))
        const filmImage = document.createElement("img")
        filmImage.setAttribute("src", item.Poster)
        filmA.appendChild(filmImage)
        filmItem.appendChild(filmA)
        filmSelection.appendChild(filmItem)
    }
    newArray.map(addLi)
}

const handleOnChangeEvent = (e) => {
    let movieType = e.target.value
    switch (movieType) {
        case "2014-or-newer":
            filterLatestMovies();
            break;
        case "avenger-films":
            filterMovies("Avengers");
            break;
        case "batman-films":
            filterMovies("Batman");
            break;
        case "x-men-films":
            filterMovies("X-Men");
            break;
        case "princess-films":
            filterMovies("Princess");
            break;
        default:
            break;
    }
}

const addEventListeners = () => {
    const radioButtons = document.getElementsByName('filter')
    const addEvent = (item) => {
        item.addEventListener('change', handleOnChangeEvent)
    }
    radioButtons.forEach(addEvent)
}
addEventListeners()


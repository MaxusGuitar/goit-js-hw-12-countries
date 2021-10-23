import cardInf from "../templates/card.hbs"
import API from "./fetchCountries.js"

const cardCountry = document.querySelector('.container')
const runSearch = document.querySelector('.run-search')

runSearch.addEventListener('submit', findCountry)

function findCountry(e) {
    e.preventDefault() // для аниперезагрузки стр при каждом поиске

    const form = e.currentTarget
    const queryCountry = form.elements.query.value //ссылка, что бы забрать текст из инпута

    API.fetchCountry(queryCountry)
        .then(countrySearch).then(() => console.clear()) // очищает консоль после каждого поиска
        .catch(() => console.log("There is no such country!!!"))
        }
        
function countrySearch(country) {
        const card = cardInf(country)
    cardCountry.innerHTML = card
    console.log(country);
    }
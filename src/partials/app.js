import cardInf from "../templates/card.hbs"
import API from "./fetchCountries.js"
import debounce from "lodash.debounce"
import Notiflix from "notiflix"

const cardCountry = document.querySelector('.container')
const runSearch = document.querySelector('.run-search > input')

runSearch.addEventListener('input', debounce(() => {
    //e.preventDefault() // для аниперезагрузки стр при каждом поиске

    //const form = e.currentTarget
    const queryCountry = runSearch.value //ссылка, что бы забрать текст из инпута

    API.fetchCountry(queryCountry)
        .then(countrySearch)
        .then(() => console.clear()) // очищает консоль после каждого поиска
        .catch(showError)
}, 300))

function showError(error) {
    cardCountry.innerHTML = `There is no such country!!!`
            console.log(error);
        }
        
function countrySearch(country) {
    const card = cardInf(country[0])
    cardCountry.innerHTML = card
    console.log(country);
    
    }
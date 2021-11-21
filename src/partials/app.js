import cardInf from "../templates/card.hbs"
import flagMini from "../templates/flag.hbs"
import API from "./fetchCountries.js"
import debounce from "lodash.debounce"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const cardCountry = document.querySelector('.container')
const runSearch = document.querySelector('.run-search > input')

// runSearch.addEventListener('input', debounce(() => {
//     e.preventDefault() // для аниперезагрузки стр при каждом поиске

//     const form = e.currentTarget
//     const queryCountry = runSearch.value //ссылка, что бы забрать текст из инпута

//     API.fetchCountry(queryCountry)
//         .then(countrySearch)
//         .then(() => console.clear()) // очищает консоль после каждого поиска
//         .catch(showError)
// }, 300))

// function showError() {
//     Notiflix.Notify.failure('Oops, there is no country with that name')
//         }
        
// function countrySearch(country) {
//     const card = cardInf(country[0])
//     cardCountry.innerHTML = card
//     console.log(country);
    
//     }
runSearch.addEventListener('input', debounce(LookingForCountry, 300));

function LookingForCountry(a) {
    
    const searchCountry = runSearch.value.trim();
    if (runSearch.value === '') {
        cardCountry.textContent = '';
        a.data === ' '
        return;
    } 
    
    {
        API.fetchCountry(`${searchCountry}`)
            .then(country => {
        if (country.length > 10 ) {
            Notify.info("Too many matches found. Please enter a more specific name.");
        } else if (country.length > 2 & country.length < 10) {
            const content = flagMini(country);
            cardCountry.innerHTML = content;
        } else {
            const markup = cardInf(country);
            cardCountry.innerHTML = markup;
     }
            }).catch(() => {Notify.failure("Oops, there is no country with that name")})
}
}
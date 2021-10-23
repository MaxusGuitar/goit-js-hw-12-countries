import cardInf from "../templates/card.hbs"

const cardCountry = document.querySelector('.container')
const runSearch = document.querySelector('.run-search')

runSearch.addEventListener('submit', findCountry)

function findCountry(e) {
    e.preventDefault() // для аниперезагрузки стр при каждом поиске

    const form = e.currentTarget
    const queryCountry = form.elements.query.value //ссылка, что бы забрать текст из инпута

    fetchCountry(queryCountry)
        .then(countrySearch)
        .catch((error) => console.log(error))
        .finally(() => form.reset())
}

function fetchCountry(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(a => {
        return a.json()
    })
}
        
function countrySearch(country) {
        const card = cardInf(country)
    cardCountry.innerHTML = card
    console.log(country);
    }
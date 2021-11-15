const BASE_URL = 'https://restcountries.com/v2'

function fetchCountry(name) {
    return fetch(`${BASE_URL}/name/${name}`)
        .then(a => a.json()
    )
}

export default {fetchCountry}
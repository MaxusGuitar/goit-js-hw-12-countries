const BASE_URL = 'https://restcountries.com/v2'

function fetchCountry(name) {
    return fetch(`${BASE_URL}/name/${name}`)
        .then(function(response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            
            return response
            
        })
        .then(response => {
            return response.json()
        })
}

export default {fetchCountry}
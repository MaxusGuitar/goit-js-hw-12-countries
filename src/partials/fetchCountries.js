const BASE_URL = 'https://pokeapi.co/api/v2'

function fetchCountry(name) {
    return fetch(`${BASE_URL}/pokemon/${name}`)
        .then(a => a.json()
    )
}

export default {fetchCountry}
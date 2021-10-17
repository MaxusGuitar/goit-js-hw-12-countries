import cardInf from "../templates/card.hbs"

fetch('https://pokeapi.co/api/v2/pokemon/1').then(a => {
    return a.json()
}).then(b => {
        console.log(b);
        const card = cardInf(b)
        console.log(card);
    })
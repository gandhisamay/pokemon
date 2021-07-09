const container = document.querySelector('#container');

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i = 1; i <= 151; i++){
    const pokemon = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = i;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    pokemon.append(newImg);
    pokemon.append(span);

    pokemon.classList.add('pokemon')
    container.append(pokemon);
}
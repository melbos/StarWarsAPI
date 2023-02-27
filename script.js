function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

function generateShip(ship) {
    const container = document.createElement('div');
    container.className = 'ship';
    document.body.appendChild(container);

    const name = document.createElement('p');
    name.innerText = `${ship.name}`;
    container.appendChild(name);

    const manufactor = document.createElement('p');
    manufactor.innerText = `${ship.name}`;
    container.appendChild(manufactor);
}

(function getStarships() {
    fetch('https://swapi.dev/api/starships/')
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((ship) => {
                generateShip(ship);
            });
            throw new Error('Greška');
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('sve 5'));
});

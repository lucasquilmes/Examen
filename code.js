const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {

    const films = await getAllStarWarsFilms();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();
  
    for (const film of films) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${film.title}</h2>
        <p>${film.opening_crawl}</p>
      `;
      mainHtmlElement.appendChild(newElement);
    }
  };
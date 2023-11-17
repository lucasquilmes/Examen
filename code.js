const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {

    const films = await getAllStarWarsFilms();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();
  
    for (const wizard of wizards) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${wizard.FirstName}</h2>
        <p>${{wizard.LastName}</p>
      `;
      mainHtmlElement.appendChild(newElement);
    }
  };
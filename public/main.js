// Definir correctamente las variables globales
const apiKey = 'd532211706014798bc54cfe7e2749c9c';
const url = 'https://api.rebrandly.com/v1/links';  // Asegurarse de que la URL esté definida

// Seleccionar los elementos del DOM
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');

const shortenUrl = async () => {
  const urlToShorten = inputField.value.trim();
  if (!urlToShorten) {
    Swal.fire('Warning', 'Please enter a valid URL.', 'warning');
    return;
  }
  const data = JSON.stringify({ destination: urlToShorten });
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
      }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    } else {
      const errorResponse = await response.json();
      Swal.fire('Error', errorResponse.message || 'Could not shorten the URL. Try again later.', 'error');
    }
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
  }
};

const displayShortUrl = (event) => {
  event.preventDefault();
  shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);

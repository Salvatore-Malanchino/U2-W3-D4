//ZXAsFbfFITZZXd4bnXQBR9SyGKnyEBfkHraPJmVuIxdka3n1cDGeqNC8

const card = document.getElementsByClassName('card');
const section = document.getElementById('main-section');
const firstButton = document.getElementById('first-img');
const SecondButton = document.getElementById('second-img');
const mainURL = 'https://api.pexels.com/v1/curated?page=2&per_page=1';
const myFistUrl = 'https://api.pexels.com/v1/search?query=ocean';
const mySecondUrl = 'https://api.pexels.com/v1/search?query=pears';

const changeImg = function (arrayOfData) {
  console.log(arrayOfData);
  arrayOfData.forEach((data) => {
    const newImg = data.photos.src;
    console.log(newImg);
  });
};
changeImg();
const image = function () {
  fetch(mainURL, {
    headers: {
      Authorization: 'ZXAsFbfFITZZXd4bnXQBR9SyGKnyEBfkHraPJmVuIxdka3n1cDGeqNC8',
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 404) {
          throw new Error('404 - Pagina non trovata');
        } else if (response.status === 500) {
          throw new Error('500 - Internal server error');
        } else {
          throw new Error('Errore generico');
        }
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
image();

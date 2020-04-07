const requestURL = 'js/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const guides = jsonObject['guides'];
    let rowNumber = 0;
    for (let i = 0; i < guides.length; i++) {
      if (guides[i].name == 'Thomas Daw' || guides[i].name == "Abby Smith" || guides[i].name == "Dave Newton") {

        rowNumber = rowNumber + 1;

        let card = document.createElement('div');
        card.setAttribute('class', 'row' + rowNumber + ' guides');

        let info = document.createElement('section');
        card.appendChild(info);

        let h2 = document.createElement('h2');
        h2.textContent = guides[i].name;
        info.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = "Life Moto: " + guides[i].motto;
        info.appendChild(h3);

        let about = document.createElement('p');
        about.textContent = "About: " + guides[i].about;
        info.appendChild(about);

        let image = document.createElement('img');
        image.setAttribute('src', 'images/' + guides[i].photo);
        image.setAttribute('alt', 'guides ' + guides[i].name)
        card.appendChild(image);

        document.querySelector('div.guides').appendChild(card);
      }
    }
  });
const requestURL = 'js/adventure.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const adventures = jsonObject['adventures'];
    let rowNumber = 0;
    for (let i = 0; i < adventures.length; i++) {
      if (adventures[i].name == 'River Fishing' || adventures[i].name == "White Water River Rafting" || adventures[i].name == "River Trail Hiking") {

        rowNumber = rowNumber + 1;

        let card = document.createElement('div');
        card.setAttribute('class', 'row' + rowNumber + ' adventures');

        let info = document.createElement('section');
        card.appendChild(info);

        let h2 = document.createElement('h2');
        h2.textContent = adventures[i].name;
        info.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = adventures[i].motto;
        info.appendChild(h3);

        let cost = document.createElement('p');
        cost.textContent = "Cost: " + adventures[i].cost;
        info.appendChild(cost);

        let guide = document.createElement('p');
        guide.textContent = "Guide: " + adventures[i].guide;
        info.appendChild(guide);

        let danger = document.createElement('p');
        danger.textContent = "Danger Level: " + adventures[i].danger;
        info.appendChild(danger);

        let image = document.createElement('img');
        image.setAttribute('src', 'images/' + adventures[i].photo);
        image.setAttribute('alt', 'Adventure ' + adventures[i].name)
        card.appendChild(image);

        document.querySelector('div.adventures').appendChild(card);
      }
    }
  });
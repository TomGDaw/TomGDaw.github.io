const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    let rowNumber = 0;
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {
        
        for(let j = 0; j = towns[i].events; j++) {
          let p = document.createElement('p');
          p.textContent = towns[i].events[j];
          document.querySelector('div.events').appendChild(p);
        }
        break;
        }

    }
  });
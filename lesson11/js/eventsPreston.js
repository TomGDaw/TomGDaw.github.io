
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == 'Preston') {

        let events = document.getElementById('events');

        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name + ' Upcoming Events';
        events.appendChild(h2);

        let event1 = document.createElement('p');
        event1.textContent = towns[i].events[0];
        events.appendChild(event1);

        let event2 = document.createElement('p');
        event2.textContent = towns[i].events[1];
        events.appendChild(event2);

        let event3 = document.createElement('p');
        event3.textContent = towns[i].events[2];
        events.appendChild(event3);
      } else {
        continue;
      }
    }
  });

  /* const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston") {

          for (let j = 0; j = towns[i].events; j++) 
          {
            let p = document.createElement('p');
            p.textContent = towns[i].events[j];
            document.querySelector('div.events').appendChild(p);
          }
        }
      }
  });
  */

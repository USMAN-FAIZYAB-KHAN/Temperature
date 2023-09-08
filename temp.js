const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Karachi&days=2';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6a53f96e8emshbd482eccd871b64p1f89eejsn5fef25e81b4a',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

async function getTemperature() {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    // Now you can work with the parsed JSON data, such as extracting temperatures.
    // For example: const temperature = data.current.temp_c;
    for (let i=0; i<data.forecast.forecastday.length; i++) {
      let hourlyTemperatures = data.forecast.forecastday[i].hour;
      let table = document.getElementById("temperatures");
      for (let i=0; i<hourlyTemperatures.length; i++) {
        let dateAndTime = hourlyTemperatures[i].time;
        let date = dateAndTime.slice(0, 11);
        let time = dateAndTime.slice(11);
        let temp = hourlyTemperatures[i].temp_c;
        let row = document.createElement("tr");
        row.innerHTML = `<td>${date}</td><td>${time}</td><td>${temp} °C</td>`;
        table.appendChild(row);
      }
    }

  } catch (error) {
    console.error(error);
  }
}

getTemperature();

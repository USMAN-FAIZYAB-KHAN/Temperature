const url2 = 'https://sea-surface-temperature.p.rapidapi.com/current?latlon=24.7855%2C67.1377';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a53f96e8emshbd482eccd871b64p1f89eejsn5fef25e81b4a',
		'X-RapidAPI-Host': 'sea-surface-temperature.p.rapidapi.com'
	}
};


async function getSurfaceTemperature() {
    try {
      const response = await fetch(url2, options2);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      let table = document.getElementById("sea_temperatures");
      for (let i=0; i<data.length; i++) {
        let date = data[i].date;
        let formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`
        let temp = data[i].tempC;
        let row = document.createElement("tr");
        row.innerHTML = `<td>${formattedDate}</td><td>${temp} °C</td>`;
        table.appendChild(row);
      }

    } catch (error) {
        console.error(error);
    }
}
    
getSurfaceTemperature()   
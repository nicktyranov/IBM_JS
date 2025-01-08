const apiKey = 'ca862edb4c3f9782ea760cb019b0534e'; // Replace 'YOUR_API_KEY' with your actual API key
function showweatherDetails(event) {
    console.log(event.currentTarget.value)
    event.preventDefault();
    console.log('cclick')
    const city = document.getElementById('city').value;
   
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then (data => {
         console.log(data)
         if (data.cod >=400) {
            throw new Error (`error: ${data.message}`)
         }
         const weatherInfo = document.getElementById('weatherInfo');
         weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
         <p>Temperature: ${data.main.temp} &#8451;</p>
         <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again. ${error.message}</p>`;
      });
}
document.getElementById('submit111').addEventListener('click',showweatherDetails );

async function byLat(event){
    event.preventDefault();
    try {
        const lat = document.getElementById('lat').value
        const lon = document.getElementById('lon').value
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        console.log(`lat - ${lat}, lon - ${lon}` )
        await fetch(apiUrl)
        
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature in ${data.name}: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        }
    
    )
        
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again. ${error.message}</p>`;
          })
    }catch(e){
        console.log('error' + e.message )
    }
}
document.getElementById('latFunc').addEventListener('click',byLat );
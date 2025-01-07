const reunionDate = new Date('2026-01-14T00:00:00'); // Set your reunion date here
const averageHeartRate = 75; // Average heart rate in beats per minute

function updateCountdown() {
    const now = new Date();
    const timeRemaining = reunionDate - now;
    const heartbeatsRemaining = Math.floor((timeRemaining / 1000) * (averageHeartRate / 60));
    
    document.getElementById('heartbeats').innerText = heartbeatsRemaining.toLocaleString();
}

function updateWeather() {
    const apiKey = 'dc8e3f9ede014ea6e603de60104ecf57'; // Replace with your weather API key
    const locations = ['Tokyo,Jpn', 'Delhi,IND']; // Replace with actual city names

    locations.forEach((location, index) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = `Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
                document.getElementById(`weather${index + 1}`).innerText = weatherInfo;
            });
    });
}

function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/India', hour: '2-digit', minute: '2-digit' }; // Change time zone as needed
    document.getElementById('time1').innerText = `Location 1 Time: ${now.toLocaleString('en-US', options)}`;
    
    options.timeZone = 'Asia/India'; // Change time zone as needed
    document.getElementById('time2').innerText = `Location 2 Time: ${now.toLocaleString('en-US', options)}`;
}

setInterval(() => {
    updateCountdown();
    updateWeather();
    updateTime();
}, 60000); // Update every minute

updateCountdown();
updateWeather();
updateTime();

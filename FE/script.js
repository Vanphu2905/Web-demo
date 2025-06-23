
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    let url = `/api/weather?city=${city.value}&country=${country.value}`;
    //let url = `http://container-web-be:5000/api/weather?city=${city.value}&country=${country.value}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
            temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?weather')";

            let weather = data.weather[0]; // Lấy phần tử đầu tiên (thường là chính xác nhất)
            weatherDescription.innerText = weather.description;

            // Icon logic
            if (weather.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
            } else if (weather.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (weather.id < 550) {
                tempIcon.src = `tempicons/rain.svg`;
            } else if (weather.id < 650) {
                tempIcon.src = `tempicons/snow.svg`;
            } else if (weather.id < 800) {
                tempIcon.src = `tempicons/atmosphere.svg`;
            } else if (weather.id === 800) {
                tempIcon.src = `tempicons/sun.svg`;
            } else if (weather.id > 800) {
                tempIcon.src = `tempicons/clouds.svg`;
            }

            feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
            humidity.innerText = `Humidity ${data.main.humidity}`;
            latitude.innerText = `Latitude ${data.coord.lat}`;
            longitude.innerText = `Longitude ${data.coord.lon}`;
        })
        .catch(error => {
            console.error("Fetch failed:", error);
            alert("Không thể lấy dữ liệu từ API. Vui lòng thử lại sau.");
        });

    // Xoá input sau khi gọi API
    country.value = "";
    city.value = "";
});

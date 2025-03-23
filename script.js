let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");

// Ẩn thông tin mặc định khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    feelsLike.innerText = "Country: ";
    humidity.innerText = "City: ";
});

check.addEventListener("click", () => {
    let url = "http://34.28.46.237:30080/function/weather";
    
    const cityName = city.value.trim();
    const countryName = country.value.trim();
    
    if (!cityName || !countryName) {
        alert("Vui lòng nhập thành phố và quốc gia.");
        return;
    }
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            city: cityName,
            country: countryName
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Có lỗi: ' + data.error);
            return;
        }
        console.log('Received data:', data);       
        // Lấy dữ liệu từ API
        const location = `${data.city || 'Unknown'}, ${data.country || 'Unknown'}`;
        const temp = data.temperature || 'N/A';
        const desc = data.description || 'N/A';
        const wind = data.wind_speed || 'N/A'; 
        // Cập nhật thông tin vào giao diện
        weatherCountry.innerText = location;
        temperature.innerText = `${temp}`; 
        weatherDescription.innerText = desc;
        feelsLike.innerText = `Country: ${countryName}`;
        humidity.innerText = `City: ${cityName}`;
        description.innerText = `Description: ${desc}`; 
        windSpeed.innerText = `Wind Speed: ${wind} m/s`; 
        // Cập nhật icon thời tiết
        if (desc && typeof desc === 'string') {
            const description = desc.toLowerCase();           
            if (description.includes('cloud')) {
                tempIcon.src = 'tempicons/clouds.svg';
            } else if (description.includes('rain')) {
                tempIcon.src = 'tempicons/rain.svg';
            } else if (description.includes('drizzle')) {
                tempIcon.src = 'tempicons/drizzle.svg';
            } else if (description.includes('sun') || description.includes('clear')) {
                tempIcon.src = 'tempicons/sun.svg';
            } else if (description.includes('snow')) {
                tempIcon.src = 'tempicons/snow.svg';
            } else if (description.includes('storm')) {
                tempIcon.src = 'tempicons/storm.svg';
            } else if (description.includes('haze') || description.includes('mist') || description.includes('fog')) {
                tempIcon.src = 'tempicons/atmosphere.svg';
            }
        }
    })
    .catch(error => {
        console.error('Request failed:', error);
        alert('Không thể lấy dữ liệu thời tiết. Vui lòng thử lại sau.');
    });
    country.value = "";
    city.value = "";
});

// Tİme Date güncelleme fonksiyonu
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('tr-TR');
  const time = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('current-date').textContent = date;
  document.getElementById('current-time').textContent = time;
}
setInterval(updateDateTime, 1000);
updateDateTime();


// filepath: c:\Users\oztur\OneDrive\Masaüstü\Python_Web_Home\static\app.js
const API_KEY = '876082a004617ee59c9f43000c75bcb3';// OpenWeatherMap API anahtarınızı buraya girin

function updateLocalWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('heat-value-local').textContent = `${data.main.temp} °C`;
      document.getElementById('moisture-value-local').textContent = `${data.main.humidity} %`;
    });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      updateLocalWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      document.getElementById('heat-value-local').textContent = 'Konum alınamadı';
      document.getElementById('moisture-value-local').textContent = 'Konum alınamadı';
    }
  );
} else {
  document.getElementById('heat-value-local').textContent = 'Desteklenmiyor';
  document.getElementById('moisture-value-local').textContent = 'Desteklenmiyor';
}


// LED kontrolü için AJAX isteği gönderen fonksiyon
function controlLed(state) {
  fetch(`/led/${state}`)
    .then((response) => response.json())
    .then((data) => {
      // Bildirimi göster
      const notification = document.getElementById("notification");
      notification.textContent = data.message;
      notification.classList.add("show");
      // 2 saniye sonra bildirimi gizle
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    })
    .catch((error) => {
      console.error("Hata:", error);
      const notification = document.getElementById("notification");
      notification.textContent = "Hata oluştu!";
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
}


function table_led(state) {
  // LED kontrolü için AJAX isteği gönderen fonksiyon
  fetch(`/table/${state}`)
    .then((response) => response.json())
    .then((data) => {
      // Bildirimi göster
      const notification = document.getElementById("notification");
      notification.textContent = data.message;
      notification.classList.add("show");
      // 2 saniye sonra bildirimi gizle
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    })
    .catch((error) => {
      console.error("Hata:", error);
      const notification = document.getElementById("notification");
      notification.textContent = "Hata oluştu!";
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
}

function speaker(state) {

  fetch(`/speaker/${state}`)
    .then((response) => response.json())
    .then((data) => {
      // bildirim göster
      const notification = document.getElementById("notification");
      notification.textContent = data.message;
      notification.classList.add("show");
      // 2 saniye sonra bildirim gizle
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
}
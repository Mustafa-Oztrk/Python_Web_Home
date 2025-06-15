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
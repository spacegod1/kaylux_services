const menuButton = document.querySelector(".navbar-toggler-text");
const closeButton = document.querySelector(".navbar-close");

menuButton.addEventListener("click", function () {
  document.querySelector(".offcanvas").style.backgroundColor = "#f9a133";
  document.getElementById("map").classList.add("hide");
  //   document.querySelector(".offcanvas").style.color = "white";
});

closeButton.addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("map").classList.remove("hide");
  }, 300);
});

navigator.geolocation.getCurrentPosition(function (pos) {
  const { latitude, longitude } = pos.coords;

  var map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("Kaylux Limited")
    .openPopup();
});

// function initMap() {
//   // Create a map and center it on Manhattan
//   var map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 40.7589, lng: -73.9851 },
//     zoom: 12,
//   });
// }

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

const latBox = document.getElementById("lat");
const longBox = document.getElementById("long");

function changePos() {
  console.log(typeof latBox.value);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: parseInt(latBox.value), lng: parseInt(longBox.value) },
    zoom: 8,
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: parseInt(position.coords.latitude),
      lng: parseInt(position.coords.longitude),
    },
    zoom: 12,
  });
}

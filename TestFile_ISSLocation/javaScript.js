// [latitude, lontitute, zoom_level]
// mymap.setView([51.505, -0.09], 13); (london location)

// Create a Map and Tiles
const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
// attribution in {} to show as an object
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap);

// Add a maker wiht a custom icon
const issIcon = L.icon({
    iconUrl: 'ISS_400.png',
    iconSize: [50, 30],
    iconAnchor: [25, 16]
})

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

// set up a tile
// L is to call all the libraries

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = latitude;
}

getISS();




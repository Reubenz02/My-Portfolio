const artistInput = document.getElementById('artistInput');
const searchBtn = document.getElementById('searchBtn');
const statusMsg = document.getElementById('statusMsg');
const dashboard = document.getElementById('dashboard');
const statTracks = document.getElementById('statTracks');
const statAlbums = document.getElementById('statAlbums');
const statAvgLen = document.getElementById('statAvgLen');
const statGenre = document.getElementById('statGenre');

async function searchArtist() {
    const name = artistInput.value.trim();
    if (name === "") return;
    statusMsg.textContent = "Loading...";

    const url = `https://apple.com{encodeURIComponent(name)}&entity=song&limit=50`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    statusMsg.textContent = "Found " + data.results.length + " tracks";
    updateStats(data.results);
    dashboard.classList.remove("hidden");
}

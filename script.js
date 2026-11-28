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


    const response = await fetch(("https://musicbrainz.org/ws/2/recording?query=artist:" + encodeURIComponent(name) + "&fmt=json&limit=50"));

    const data = await response.json();

    console.log(data.recordings);
   statusMsg.textContent="Found" + data.recordings.length+ "tracks for" + name;
    dashboard.classList.remove("hidden");
}

searchBtn.addEventListener("click", searchArtist);

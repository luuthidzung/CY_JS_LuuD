const playlist = [
    {
        title: "You Raise Me Up",
        artist: "Secret Garden",
        cover: "media/audio.png",
        audio: "media/music.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        cover: "media/perfectimg.png",
        audio: "media/perfect.mp3"
    },
    {
        title: "All of Me",
        artist: "John Legend",
        cover: "media/all.png",
        audio: "media/allofme.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        cover: "media/10005.png",
        audio: "media/perfect.mp3"
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isPlaylistVisible = false;

const song = document.getElementById('song');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const circle = document.getElementById('circle')
const ctrlIcon = document.getElementById("ctrlIcon");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playlistContainer = document.getElementById("playlist");
const overlay = document.getElementById("overlay");

function loadSong(index) {
    const currentSong = playlist[index];
    title.textContent = currentSong.title;
    artist.textContent = currentSong.artist;
    cover.src = currentSong.cover;
    song.src = currentSong.audio;
    updatePlaylistUI();
}

function uploadSong() {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0]; 
    if (file) {
        const songUrl = URL.createObjectURL(file); 
        const newSong = {
            title: file.name.replace(/\.[^/.]+$/, ""), 
            artist: "Unknown Artist", 
            cover: "media/default_cover.png", 
            audio: songUrl 
        };

        playlist.push(newSong); 
        createPlaylist();
        alert("Song added to playlist!");
    }
}

// tao playlist tu icon bar----------------------------------------------------------
function createPlaylist() {
    playlistContainer.innerHTML = '<h2>Playlist</h2>';
    playlist.forEach((song, index) => {
        const item = document.createElement("div");
        item.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
        item.onclick = () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playPause();
            hidePlaylist();
        };

        item.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="playlist-item-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        playlistContainer.appendChild(item);
    });
}


function updatePlaylistUI() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        item.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
    });
}
function togglePlaylist() {
    isPlaylistVisible = !isPlaylistVisible;
    playlistContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}
function hidePlaylist() {
    if (isPlaylistVisible) {
        isPlaylistVisible = false;
        playlistContainer.classList.remove('active');
        overlay.classList.remove('active');
    }
}
//--------------------------------------------------------------------------------------
function playPause() {
    if (isPlaying) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        hidePlaylist();
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        song.play();
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        song.play();
    }
}


//---------------------------------------------------------------
song.addEventListener('timeupdate', () => {
    const percent = (song.currentTime / song.duration) * 100;
    progress.style.width = percent + '%';
    circle.style.left = percent + '%'; 
});


song.addEventListener('loadedmetadata', () => {
    progress.style.width = 0; 
    circle.style.left = '0%'; 
});

progressContainer.addEventListener('click', (event) => {
    const rect = progressContainer.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const percent = x / rect.width; 
    song.currentTime = percent * song.duration; 
});

//-----------------------------------------------------------------
circle.addEventListener('mousedown', (event) => {
    isDragging = true;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
});

function onDrag(event) {
    if (isDragging) {
        const rect = progressContainer.getBoundingClientRect();
        let x = event.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width)); 
        const percent = x / rect.width;
        song.currentTime = percent * song.duration; 
        progressBar.style.width = percent * 100 + '%'; 
        circle.style.left = percent * 100 + '%';
    }
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
}

// play song
loadSong(currentSongIndex);
createPlaylist();

document.addEventListener('click', (e) => {
    if (!playlistContainer.contains(e.target) && 
        !e.target.closest('.circle')) {
        hidePlaylist();
    }
});










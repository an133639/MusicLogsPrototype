import SongCard from "./SongCard";
import { useState } from "react";
import { SONGS_DB } from "./data/songs";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  function matches(song) {
    return song.title.toLowerCase().includes(query.toLowerCase());
  }

  const suggestions = SONGS_DB.filter(matches);

  function addSong(song) {
    if (playlist.some((item) => item.id === song.id)) {
      setQuery("");
      return;
    }

    setPlaylist([song, ...playlist]);
    setQuery("");
  }

  function deleteSong(id) {
    setPlaylist(playlist.filter((song) => song.id !== id));
  }

  function markAsListened(id) {
  setPlaylist(
    playlist.map((song) =>
      song.id === id
        ? {
            ...song,
            listened: true
          }
        : song
    )
  );
}

  function toggleFilter(filter) {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  }

function addCustomSong(input) {
  const parts = input.split(" - ");

  const title = parts[0]?.trim() || "Untitled";
  const artist = parts[1]?.trim() || "Unknown Artist";

  const newSong = {
    id: Date.now(),
    title,
    artist,
    album: "",
    cover: "/MusicLogsPrototype/albumcovers/unknown_song.png",
    type: "song",
    listened: false,
  };

  setPlaylist([newSong, ...playlist]);
  setQuery("");
}

const displayedSongs = playlist.filter((song) => {

  if (selectedFilter === null)
    return !song.listened;

  if (selectedFilter === "song")
    return song.type === "song" && !song.listened;

  if (selectedFilter === "album")
    return song.type === "album" && !song.listened;

  if (selectedFilter === "listened")
    return song.listened;

  return true;
});
  return (
    <div className="background">
      <div className="phone">

        <header className="header">
          <h1>MusicLogs</h1>
        </header>

        <div className="tabs">

          <button
            className={selectedFilter === "song" ? "active" : ""}
            onClick={() => toggleFilter("song")}
          >
            Songs
          </button>

          <button
            className={selectedFilter === "album" ? "active" : ""}
            onClick={() => toggleFilter("album")}
          >
            Albums
          </button>

          <button
            className={selectedFilter === "listened" ? "active" : ""}
            onClick={() => toggleFilter("listened")}
          >
            Listened
          </button>

        </div>

        <div className="searchContainer">

          <input
            className="searchBar"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search songs or albums..."
          />

          <button
            className="add-button"
            onClick={() => {
            if (query === "") return;

            if (suggestions.length > 0) {
              addSong(suggestions[0]);
            } else {
              addCustomSong(query);
            }
          }}
          >
            +
          </button>

        </div>

        {query && suggestions.length > 0 && (
          <div className="dropdown">

            {suggestions.map((song) => (
              <div
                key={song.id}
                className="dropdown-item"
                onClick={() => addSong(song)}
              >
                {song.title} — {song.artist}
              </div>
            ))}

          </div>
        )}

        <div className="content">

          {displayedSongs.length === 0 ? (

            <div className="emptyState">

              <div className="musicIcon">🎵</div>

              <h2>
                {selectedFilter === null
                  ? "Start Your Music Log"
                  : "Nothing Here Yet"}
              </h2>

              <p>
                {selectedFilter === null
                  ? "Search for a song or album to begin building your collection."
                  : "There are no items that match this filter."}
              </p>

            </div>

          ) : (

            <div className="playlist">

              {displayedSongs.map((song) => (
  <SongCard
    key={song.id}
    song={song}
    deleteSong={deleteSong}
    markAsListened={markAsListened}
  />
))}

            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default App;
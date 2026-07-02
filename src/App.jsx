import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="phone">

        <header className="header">
          <h1>MusicLogs</h1>
          <p>Keep track of music you want to hear.</p>
        </header>

        <div className="searchContainer">
          <input
            type="text"
            className="searchBar"
            placeholder="Search songs or albums..."
          />
        </div>

        <div className="tabs">
          <button className="active">Songs</button>
          <button>Albums</button>
          <button>Listened</button>
        </div>

        <div className="content">
          <div className="emptyState">
            <div className="musicIcon">🎵</div>

            <h2>Start Your Music Log</h2>

            <p>
              Search for a song or album to begin building your collection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
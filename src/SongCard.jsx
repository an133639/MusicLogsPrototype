function SongCard({
  song,
  deleteSong,
  markAsListened
}) {
  return (
    <div className="playlist-item">

      <img
        src={song.cover}
        alt={song.title}
        className="cover"
      />

      <div className="song-info">

        <strong><a href={song.link} target="_blank" rel="noopener noreferrer">{song.title}</a></strong>

        <p>{song.artist}</p>

        <small>{song.album}</small>

      </div>

      <div className="song-buttons">

        {!song.listened && (
          <button
            className="listen-btn"
            onClick={() => markAsListened(song.id)}
          >
            X Listened
          </button>
        )}

        {song.listened && (
          <button
            className="listened-btn"
            disabled
          >
            ✓ Listened
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => deleteSong(song.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default SongCard;
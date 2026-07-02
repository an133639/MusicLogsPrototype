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

        <strong>{song.title}</strong>

        <p>{song.artist}</p>

        <small>{song.album}</small>

      </div>

      <div className="song-buttons">

        {!song.listened && (
          <button
            className="listen-btn"
            onClick={() => markAsListened(song.id)}
          >
            ✓ Listened
          </button>
        )}

        {song.listened && (
          <button
            className="listened-btn"
            disabled
          >
            ✓ Already Listened
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
const BASE = import.meta.env.BASE_URL;
export const SONGS_DB = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    type: "song",
    link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?autoplay_ok=1",
    listened: false,
    rating: null,
    cover: `${BASE}albumcovers/The_Weeknd_-_Blinding_Lights.png`
  },
  {
    id: 2,
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    type: "album",
    link: "https://open.spotify.com/album/7fJJK56U9fHixgO0HQkhtI",
    listened: false,
    rating: null,
    cover: `${BASE}albumcovers/Dua_Lipa_-_Future_Nostalgia_(Official_Album_Cover).png`
  },
  {
    id: 3,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    type: "song",
    link: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3?autoplay_ok=1",
    listened: false,
    rating: null,
    cover: `${BASE}albumcovers/Shape_Of_You_(Official_Single_Cover)_by_Ed_Sheeran.png`
  },
  {
    id: 4,
    title: "Say It Ain't So",
    artist: "Weezer",
    album: "Weezer (Blue)",
    type: "song",
    link: "https://open.spotify.com/track/7vhhU4SsMDV8uSQlCxf1Lk?autoplay_ok=1",
    listened: false,
    rating: null,
    cover: `${BASE}albumcovers/Weezer_-_Blue_Album.png`
  },
  {
    id: 5,
    title: "Deltarune Chapter 5 OST",
    artist: "Toby Fox",
    album: "Deltarune Chapter 5 OST",
    type: "album",
    link: "https://open.spotify.com/album/2LFHooldVH3usvXaAW6FTz",
    listened: false,
    rating: null,
    cover: `${BASE}albumcovers/deltarune_chapter_5_ost.jpg`
  },
  {
    id: 6,
    title: "Piano Man",
    artist: "Billy Joel",
    album: "Piano Man",
    type: "song",
    link: "https://open.spotify.com/track/78WVLOP9pN0G3gRLFy1rAa?si=6c54ccd21ed84cc3",
    listened: false,
    rating: null,
    cover: `${BASE}albumcovers/Billy_Joel_-_Piano_Man.jpg`
  }
];
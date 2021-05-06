import React from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state.searchResults = [
      { name: "Rocketman", artist: "Elton John", album: "Diamonds", id: 1 },
      {
        name: "Crocodile Rock",
        artist: "Elton John",
        album: "Diamonds",
        id: 2,
      },
      { name: "Daniel", artist: "Elton John", album: "Diamonds", id: 3 },
    ];

    this.state.playlistName = "Jen's Playlist";

    this.state.playlistTracks = [
      { name: "Yellow Brick Road", artist: "The Beatles", album: "One", id: 3 },
      { name: "Help!", artist: "The Beatles", album: "One", id: 4 },
      { name: "Hey Jude", artist: "The Beatles", album: "One", id: 5 },
    ];

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.setState.playlistTracks({ track });
    }
  }

  removeTrack(track) {
    const updatedPlaylist = this.state.playlistTracks.filter(
      (currentTrack) => currentTrack.id === track.id
    );
    this.setState.playlistTracks(updatedPlaylist);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

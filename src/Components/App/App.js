import React from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "Rocketman", artist: "Elton John", album: "Diamonds", id: 1 },
        {
          name: "Crocodile Rock",
          artist: "Elton John",
          album: "Diamonds",
          id: 2,
        },
        { name: "Daniel", artist: "Elton John", album: "Diamonds", id: 3 },
      ],
      playlistName: "Jen's Playlist",
      playlistTracks: [
        {
          name: "Yellow Brick Road",
          artist: "The Beatles",
          album: "One",
          id: 3,
        },
        { name: "Help!", artist: "The Beatles", album: "One", id: 4 },
        { name: "Hey Jude", artist: "The Beatles", album: "One", id: 5 },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  updatePlaylistName(name) {
    this.setState.playlistName({ name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

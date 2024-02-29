import "./index.css";
import React, { Component } from "react";
import SongCard from "./Components/SongCard";
import Songs from "./Components/Services/Songs";

export class App extends Component {
  state = {
    Songs,
  };
  // sorting by title
  sortBytitle = () => {
    this.setState({
      Songs: [
        ...this.state.Songs.sort((a, b) =>
          a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
        ),
      ],
    });
  };
// sorting by rating
  sortByRating =() =>{
    this.setState({
      Songs:[...this.state.Songs.sort((a,b) => b.rating -a.rating)]
    })
  };
  render() {
    return (
      <div id="super-tunes">
        <h1 id="st-title">SuperTunes - Songs of the Week</h1>
        <button className="st-btn" onClick={this.sortBytitle}>Sort By Title</button>
        <button className="st-btn"onClick={this.sortByRating}>Sort By Rating</button>
        <div id="song-list">
          {this.state.Songs.map((Song) => (
            <SongCard key={Song.id} data={Song} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

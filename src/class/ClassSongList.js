import React from "react";
import ClassSongForm from "./ClassSongForm";

// Convention for class component
class ClassSongList extends React.Component {
  constructor(props) {
    super(props)
    // Since React only, setting state w/ song data 
    // to populate form
    this.state = {
      songs: [
        {title: 'Get Back', artist: 'The Beatles'},
        {title: 'Hey Jude', artist: 'The Beatles'},
        {title: 'Paperback Writer', artist: 'The Beatles'},
        {title: 'Thunderstruck', artist: 'AC/DC'},
        {title: 'You Shook Me', artist: 'AC/DC'},
        {title: 'Highway To Hell', artist: 'AC/DC'},
        {title: 'Sweet Emotion', artist: 'Aerosmith'},
        {title: 'Walk This Way', artist: 'Aerosmith'},
        {title: 'Mama Kin', artist: 'Aerosmith'},
        {title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd'},
        {title: 'Gimme Three Steps', artist: 'Lynyrd Skynyrd'},
        {title: 'Free Bird', artist: 'Lynyrd Skynyrd'}],
      showForm: false}
  }

  // Function to add new song to SongList
  addSong = (song) => {
    //DB Call would normally be here (axios or provider)

    //Update State
    let updateSongs = [song, ...this.state.songs]
    this.setState({
      songs:updateSongs
    })
  }

  // Function to delete songs by filtering out all songs != songTitle
  deleteSong = (songTitle) => {
    //DB Delete Call would normally be here (axios or provider)

    let filteredSongs = this.state.songs.filter(s => s.title !== songTitle)
    this.setState({
      songs:filteredSongs
    })
  }

  //Function to display songs w/ delete button
  renderSongs = () => {
    return this.state.songs.map((s) => {
      return (
        <div className="border">
          <p>{s.title}</p>
          <p>{s.artist}</p>
          <button onClick={() => this.deleteSong(s.title)}>Delete</button>
        </div>
      );
    });
  };

  //Function to toggle hiding/viewing the SongForm
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  //You have to define render with a class component
  render () {
    return (
      <div className="border">
        <button onClick={this.toggleForm}>{this.state.showForm ? 'Hide Form' : 'Add Song'}</button>
        {this.state.showForm && <ClassSongForm addSong={this.addSong} />}
        <h2>Song List</h2>
        {this.renderSongs()}
      </div>
    )
  }
}

export default ClassSongList
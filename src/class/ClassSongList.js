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
        {id: Math.random(), title: 'Get Back', artist: 'The Beatles'},
        {id: Math.random(), title: 'Hey Jude', artist: 'The Beatles'},
        {id: Math.random(), title: 'Paperback Writer', artist: 'The Beatles'},
        {id: Math.random(), title: 'Thunderstruck', artist: 'AC/DC'},
        {id: Math.random(), title: 'You Shook Me', artist: 'AC/DC'},
        {id: Math.random(), title: 'Highway To Hell', artist: 'AC/DC'},
        {id: Math.random(), title: 'Sweet Emotion', artist: 'Aerosmith'},
        {id: Math.random(), title: 'Walk This Way', artist: 'Aerosmith'},
        {id: Math.random(), title: 'Mama Kin', artist: 'Aerosmith'},
        {id: Math.random(), title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd'},
        {id: Math.random(), title: 'Gimme Three Steps', artist: 'Lynyrd Skynyrd'},
        {id: Math.random(), title: 'Free Bird', artist: 'Lynyrd Skynyrd'}],
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
        <div className="border" key={s.id}>
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
      <div className="border" key={Math.random()}>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'Hide Form' : 'Add Song'}</button>
        {this.state.showForm && <ClassSongForm addSong={this.addSong} />}
        <h2>Song List</h2>
        {this.renderSongs()}
      </div>
    )
  }
}

export default ClassSongList
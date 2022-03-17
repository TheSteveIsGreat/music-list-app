import { useState, useEffect } from "react";
import SongForm from "./SongForm";

const FunctionalSongList = (props) => {
  const [showForm, SetShowForm] = useState(false)
  const [song, SetSong] = useState({title: '', artist: ''})
  //UseEffect to render list on mount
  useEffect(() => {
    console.log('FunctionalSongList UseEffect Mounted')
  }, [])

  //UseState(s) to set song and artist state
  const [songs, setSongs] = useState( [
    { title: 'Get Back', artist: 'The Beatles' },
    { title: 'Hey Jude', artist: 'The Beatles' },
    { title: 'Paperback Writer', artist: 'The Beatles' },
    { title: 'Thunderstruck', artist: 'AC/DC' },
    { title: 'You Shook Me', artist: 'AC/DC' },
    { title: 'Highway To Hell', artist: 'AC/DC' },
    { title: 'Sweet Emotion', artist: 'Aerosmith' },
    { title: 'Walk This Way', artist: 'Aerosmith' },
    { title: 'Mama Kin', artist: 'Aerosmith' },
    { title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd' },
    { title: 'Gimme Three Steps', artist: 'Lynyrd Skynyrd' },
    { title: 'Free Bird', artist: 'Lynyrd Skynyrd' }])

  // Function to add new song to SongList
  const addSong = (song) => {
    //DB Call would normally be here (axios or provider)

    //Update State
    let updatedSongs = [song, ...songs]
    setSongs(updatedSongs)
  }

   // Function to delete songs by filtering out all songs != songTitle
   const deleteSong = (songTitle) => {
    //DB Delete Call would normally be here (axios or provider)

    let filteredSongs = songs.filter(s => s.title !== songTitle)
    {
      setSongs(filteredSongs)
    }
  }

  const renderSongs = () => {
    return songs.map(s => {
      return (
        <div className="border">
          <p>{s.title}</p>
          <p>{s.artist}</p>
          <button>Delete</button>
        </div>
      )
    })
  }

  //Function to toggle hiding/viewing the SongForm
  const toggleForm = () => {
    SetShowForm(!showForm)
  }

  return (
    <div className="border">
      <button onClick={toggleForm}>{showForm ? 'Hide Form' : 'Add Song'}</button>
      {showForm && <SongForm addSong={addSong} />}
      <h2>Functional Song List</h2>
      {renderSongs()}
    </div>
  )
}

export default FunctionalSongList
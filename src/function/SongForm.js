import React, { useState } from "react";

const SongForm = (props) => {
  const [song, SetSong] = useState ({title: '', artist: ''})

  const handleChange = (e) => {
    SetSong(e.target.value)
  }

  const handleSubmit = (e) => {
    //Prevents automatic page load
    e.preventDefault()
    //View state
    console.log(song)
    //Use addSong to add to list
    props.addSong(song)
  }

  return (
    <div>
      <h1>Functional Song Form</h1>
      <div className="border">
        <h2>Song Form</h2>
        <form onSubmit={handleSubmit}>
          <p>Title:</p>
          <input name="title" value={song.title} onChange={handleChange}/>
          <p>Artist:</p>
          <input name="artist" value={song.artist} onChange={handleChange}/>
          <br/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SongForm
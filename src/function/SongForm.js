import React, { useState } from "react";

const SongForm = (props) => {
  const [title, SetTitle] = useState (props.title || '')
  const [artist, SetArtist] = useState (props.artist || '')

  

  const handleSubmit = (e) => {
    //Prevents automatic page load
    e.preventDefault()
    //View state
    console.log(e)
    //Use addSong to add to list
    let songData = {title, artist}
    props.addSong(songData)
  }

  return (
    <div>
      <h1>Functional Song Form</h1>
      <div className="border">
        <h2>Song Form</h2>
        <form onSubmit={handleSubmit}>
          <p>Title:</p>
          <input name="title" value={title} onChange={(e)=>SetTitle(e.target.value)}/>
          <p>Artist:</p>
          <input name="artist" value={artist} onChange={(e)=>SetArtist(e.target.value)}/>
          <br/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SongForm
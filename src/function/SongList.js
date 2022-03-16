import { useState, useEffect } from "react";

const FunctionalSongList = (props) => {
  //UseEffect to render list on mount
  useEffect(() => {
    console.log('FunctionalSongList UseEffect Mounted')
  },[])

  //UseState(s) to set song and artist state
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')

  return (
    <div className="border">
      <h2>Functional Song List</h2>
      <p>{song}</p>
      <p>{artist}</p>
    </div>
  )
}

export default FunctionalSongList
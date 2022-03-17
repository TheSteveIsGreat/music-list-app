import React from "react";

class ClassSongForm extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      title:'',
      artist:'',
    }
  }

  //Function to update form input values
  handleChange = (e) => {
    // logging value input and what field it is populating based on the name
    console.log('value:', e.target.value)
    console.log('name:', e.target.name)
    // Cleaner way to set state
    this.setState({
        [e.target.name]:e.target.value
    })
    
    // THIS WORKS ALSO
    // if(e.target.name === 'title'){
    //     this.setState({
    //         title:e.target.value
    //     })
    // }
    // if(e.target.name === 'artist'){
    //     this.setState({
    //         artist:e.target.value
    //     })
    // }
}

  handleSubmit = (e) => {
    //Prevents automatic page load
    e.preventDefault()
    //View state
    console.log(this.state)
    //Use addSong to add to list
    this.props.addSong(this.state)
  }

  render () {
    return (
      <div className="border">
        <h2>Song Form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Title:</p>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
          <p>Artist:</p>
          <input name="artist" value={this.state.artist} onChange={this.handleChange}/>
          <br/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ClassSongForm
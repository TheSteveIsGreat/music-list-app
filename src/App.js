import './App.css';
import ClassSongList from './class/ClassSongList';
import FunctionalSongList from './function/SongList';

function App() {
  return (
    <div className="border">
      
      <div>
      <h1>Class Components: </h1>
      <ClassSongList />
      </div>
      
      <div>
        <h1>Functional Components:</h1>
        <FunctionalSongList/>
      </div>
      
    </div>
  );
}

export default App;

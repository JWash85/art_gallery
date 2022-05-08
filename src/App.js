import {useState, useEffect} from 'react'
//import logo from './logo.svg';
import './App.css';
import ButtonBar from './ButtonBar';
import Gallery from './Gallery';

//I might implement elements from rainbow activity to update and submit api object id's
function App(){
let [artId, setArtId] = useState(12720)
let [data, setData] = useState({})

/* State variables here... */
useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId]);

// in App.js
// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

const displayImage = () => {
  if(!data.primaryImage) {
    return (
      <h2>No Image!</h2>
    )
  }
 return (
  <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />

  )
}

return (
  <div className="App">
    <h1>{data.title}</h1>
    <div style={{'width': '100px'}}>
    {displayImage()}
    </div>
    <ButtonBar handleIterate={handleIterate} />
  </div>
);
}

export default App;


import React, {useEffect, useState} from 'react';
import './App.css';
 import  {ChordChart}  from "../ChordChart/ChordChart";
import  {ISong} from "../ChordChart/ChordChart";

const songData: ISong = {
  "title": "Autumn Leaves",
  "key": "E minor",
  "tempo": 120,
  "style": "Jazz",
  "structure": [
    { "section": "A", "bars": 8 },
    { "section": "B", "bars": 8 },
    { "section": "A", "bars": 8 }
  ],
  "measures": [
    {"chords":[
      { "chord": "Em7", "duration": "1" },
      { "chord": "Gmaj7", "duration": "1" },
      { "chord": "Am7", "duration": "1" },
      { "chord": "B7", "duration": "1" }
    ]}
  ]
}

const App: React.FC = () => {
  // const [song, setSong] = useState<ISong>(songData);
  //
  // useEffect(() => {
  //   // If fetching from an API:
  //   // fetch('url-to-your-song.json')
  //   //   .then((response) => response.json())
  //   //   .then((data) => setSong(data as ISong))
  //   //   .catch((error) => console.error('Error fetching song data:', error));
  //
  //   // If using a local JSON file:
  //   setSong(songData as ISong);
  // }, []);

  return (
    <div className="App">
      <ChordChart song={songData} />
    </div>
  );
};


export default App;

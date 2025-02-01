import React, {useEffect, useState} from 'react';
import './App.css';
 import  {ChordChart}  from "../ChordChart/ChordChart";
import  {ISong} from "../ChordChart/ChordChart";

const songData: ISong = {
  "title": "All The Things You Are",
  "key": "Ab major",
  "tempo": 130,
  "style": "Jazz",
  "timeSignature": "4/4",
  "structure": [
    { "section": "A", "bars": 8 },
    { "section": "B", "bars": 8 },
    { "section": "A2", "bars": 8 },
    { "section": "C", "bars": 8 }
  ],
  "measures": [
    {"chords": [
      { "chord": "Fm7", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "Bbm7", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "Eb7", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "AbMaj7", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "DbMaj7", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "Dm7b5", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "G7", "duration": "4" }
    ]},
    {"chords": [
      { "chord": "CMaj7", "duration": "4" }
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

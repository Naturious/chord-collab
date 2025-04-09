import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ISong } from "../ChordChart/ChordChart";
import { ChordPage, ChordPage2 } from '../Pages/ChordPages';

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
    {
      "chords": [
        { "chord": "Fm7", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "Bbm7", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "Eb7", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "AbMaj7", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "DbMaj7", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "Dm7b5", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "G7", "duration": "4" }
      ]
    },
    {
      "chords": [
        { "chord": "CMaj7", "duration": "4" }
      ]
    }
  ]
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ChordPage songData={songData} />} />
          <Route path="/page2" element={<ChordPage2 songData={songData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

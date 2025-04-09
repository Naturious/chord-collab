import React from 'react';
import { Link } from 'react-router-dom';
import { ChordChart } from "../ChordChart/ChordChart";
import { ISong } from "../ChordChart/ChordChart";

interface ChordPageProps {
  songData: ISong;
}

export const ChordPage: React.FC<ChordPageProps> = ({ songData }) => {
  return (
    <div className="chord-page">
      <nav>
        <Link to="/page2">Go to Page 2</Link>
      </nav>
      <ChordChart song={songData} />
    </div>
  );
};

export const ChordPage2: React.FC<ChordPageProps> = ({ songData }) => {
  return (
    <div className="chord-page">
      <nav>
        <Link to="/">Go to Page 1</Link>
      </nav>
      <ChordChart song={songData} />
    </div>
  );
}; 

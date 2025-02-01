import React from 'react';
import '../App/App.css';

interface IChord {
  chord: string;
  duration: string;
}

interface IMeasure {
  chords: IChord[];
}

interface ISong {
  title: string;
  key: string;
  tempo: number;
  style: string;
  structure: { section: string; bars: number }[];
  measures: IMeasure[];
  timeSignature?: string;
}

interface IChordChartProps {
  song: ISong;
}

interface IMeasureProps {
  chords: IChord[];
}

interface IChordProps {
  symbol: string;
}

const Chord: React.FC<IChordProps> = ({ symbol }) => {
  return <span className="chord">{symbol}</span>;
};

const Measure: React.FC<IMeasureProps> = ({ chords }) => {
  return (
    <div className="measure">
      <div className="measure-bar left">|</div>
      <div className="measure-content">
        {chords.map((chord, index) => (
          <div key={index} className="chord-container">
            <span className="chord">{formatChord(chord.chord)}</span>
          </div>
        ))}
      </div>
      <div className="measure-bar right">|</div>
    </div>
  );
};

// Helper function to format chord symbols
const formatChord = (chord: string): string => {
  // Replace common chord notations with proper formatting
  return chord
    .replace('Maj7', 'Δ7')
    .replace('maj7', 'Δ7')
    .replace('m7b5', 'ø7')
    .replace('dim7', '°7');
};

export const ChordChart: React.FC<IChordChartProps> = ({ song }) => {
  const measuresPerRow = 4;
  const rows: IMeasure[][] = [];
  const timeSignature = song.timeSignature || "4/4";
  
  for (let i = 0; i < song.measures.length; i += measuresPerRow) {
    const rowMeasures = song.measures.slice(i, i + measuresPerRow);
    rows.push(rowMeasures);
  }

  return (
    <div className="chord-chart">
      <div className="song-header">
        <h2>{song.title}</h2>
        <div className="song-info">
          {song.key} - {timeSignature} - {song.tempo} BPM - {song.style}
        </div>
      </div>
      <div className="measures-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="measures-row">
            {rowIndex === 0 && (
              <div className="time-signature">{timeSignature}</div>
            )}
            {row.map((measure, index) => (
              <Measure key={index} chords={measure.chords} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export type {ISong as ISong};

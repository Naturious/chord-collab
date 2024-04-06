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
  return <div className="chord">{symbol}</div>;
};

const Measure: React.FC<IMeasureProps> = ({ chords }) => {
  return (
    <div className="measure">
      {chords.map((chord, index) => (
        <Chord key={index} symbol={chord.chord} />
      ))}
    </div>
  );
};

export const ChordChart: React.FC<IChordChartProps> = ({ song }) => {
  return (
    <div>
      {song.title} - {song.key} - {song.tempo} BPM - {song.style}
      {song.measures.map((measure, index) => (
        <Measure key={index} chords={measure.chords} />
      ))}
    </div>
  );
};

export type {ISong as ISong};

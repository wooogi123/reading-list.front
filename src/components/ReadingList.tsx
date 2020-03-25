import React from 'react';
import ReadingItem from './ReadingItem';
import { useReadingState } from '../contexts/ReadingContext';

function ReadingList() {
  const readings = useReadingState();

  return (
    <ul>
      {readings.map(reading => (
        <ReadingItem reading={reading} key={reading.id} />
      ))}
    </ul>
  );
}

export default ReadingList;
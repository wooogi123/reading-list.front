import React from 'react';
import ReadingItem from './ReadingItem';
import Header from '../components/common/Header';
import { useReadingState } from '../contexts/ReadingContext';

function ReadingList() {
  const readings = useReadingState();

  return (
    <>
      <Header />
      <ul>
        {readings.map(reading => (
          <ReadingItem reading={reading} key={reading.id} />
        ))}
      </ul>
    </>
  );
}

export default ReadingList;
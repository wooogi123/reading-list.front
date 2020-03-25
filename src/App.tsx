import React from 'react';
import ReadingForm from './components/ReadingForm';
import ReadingList from './components/ReadingList';
import { ReadingContextProvider } from './contexts/ReadingContext';

function App() {
  return (
    <ReadingContextProvider>
      <ReadingForm />
      <ReadingList />
    </ReadingContextProvider>
  );
}

export default App;
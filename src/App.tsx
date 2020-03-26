import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReadingList from './components/ReadingList';
import WritePage from './pages/WritePage';
import { ReadingContextProvider } from './contexts/ReadingContext';

function App() {
  return (
    <Router>
      <ReadingContextProvider>
        <Route path="/" component={ReadingList} />
        <Route path="/write" component={WritePage} />
      </ReadingContextProvider>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WritePage from './views/WriteView';
import PostListPage from './views/PostListView';
import { RoomContextProvider } from './contexts/RoomContext';
import { ReadingContextProvider } from './contexts/ReadingContext';

function App() {
  return (
    <Router>
      <RoomContextProvider>
        <ReadingContextProvider>
          <Route path="/" component={PostListPage} />
          <Route path="/write" component={WritePage} />
        </ReadingContextProvider>
      </RoomContextProvider>
    </Router>
  );
}

export default App;

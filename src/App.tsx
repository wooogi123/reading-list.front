import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WritePage from './pages/WritePage';
import PostListPage from './pages/PostListPage';
import { ReadingContextProvider } from './contexts/ReadingContext';

function App() {
  return (
    <Router>
      <ReadingContextProvider>
        <Route path="/" component={PostListPage} />
        <Route path="/write" component={WritePage} />
      </ReadingContextProvider>
    </Router>
  );
}

export default App;
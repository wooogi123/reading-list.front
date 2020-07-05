import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WritePage from './views/WriteView';
import PostListPage from './views/PostListView';

function App() {
  return (
    <Router>
      <Route path="/" component={PostListPage} />
      <Route path="/write" component={WritePage} />
    </Router>
  );
}

export default App;

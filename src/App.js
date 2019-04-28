import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Header from './components/Header'
import CollectionPage from './pages/Collections'
import ProjectPage from './pages/Project'
import UserPage from './pages/User'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/collections" exact component={CollectionPage} />
        <Route path="/project/:id" exact component={ProjectPage} />
        <Route path="/user/:id" exact component={UserPage} />
      </Router>
    </div>
  );
}

export default App;

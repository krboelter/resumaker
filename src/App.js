import React from 'react';
import './App.css';
// import routes here

import Home from './components/Home';
import Menu from './components/Menu';

function App() {
    return (
        <div className="App">
            <Menu />
            <Home />
        </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Home from './components/Home';
import Menu from './components/Menu';

function App() {
    return (
        <div className="App">
            <Menu />

            <Route exact path='/' component={Home} />
        </div>
  );
}

export default App;

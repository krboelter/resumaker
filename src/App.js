import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Home from './components/Home';
import Menu from './components/Menu';
import Resume from './components/Resume';

function App() {
    return (
        <div className="App">
            <Menu />

            <Route exact path='/' component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/resume" component={Resume} />
        </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Home from './components/Home';
import Menu from './components/Menu';
import MakeIt from './components/MakeIt';
import PrintIt from './components/PrintIt'

function App() {
    return (
        <div className="App">
            <Menu />

            <Route exact path='/' component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/makeit" component={MakeIt} />
            <Route exact path="/printit" component={PrintIt} />
        </div>
  );
}

export default App;

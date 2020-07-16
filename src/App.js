import React from 'react';
import Home from './components/homepage/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App' style={{height: '100%'}}>
        <Route exact path='/' component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

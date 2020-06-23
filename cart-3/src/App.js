import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './components/Routes';
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
  <BrowserRouter>
      <Routes />
      {/* <Home/> */}
      {/* <Navbar/> */}
    </BrowserRouter>
  );
}

export default App;

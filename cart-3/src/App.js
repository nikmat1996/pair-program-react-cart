import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Application from './components/Application';

function App() {
  return (
  <BrowserRouter>
        <Application />
    </BrowserRouter>
  );
}

export default App;

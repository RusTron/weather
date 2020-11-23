import React from 'react';
import { Header } from './components/Header';
import './App.css';
import { PlacesInput } from './components/PlacesInput';

function App() {
  return (
    <div className="App">
      <Header />
      <PlacesInput />
    </div>
  );
}

export default App;

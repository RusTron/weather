import React from 'react';
import { Header } from './components/Header';
import './App.scss';
import { PlacesInput } from './components/PlacesInput';
import { TemperatureChart } from './components/TemperatureChart';

function App() {
  return (
    <div className="App">
      <Header />
      <PlacesInput />
      <TemperatureChart />
    </div>
  );
}

export default App;

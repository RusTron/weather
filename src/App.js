import React from 'react';
import { Header } from './components/Header';
import './App.css';
import { PlacesInput } from './components/PlacesInput';
import { TemperatureChart } from './components/TemperatureChart';
import {withTranslate} from 'react-translate-text';

function App() {
  return (
    <div className="App">
      <Header />
      <PlacesInput />
      <TemperatureChart />
    </div>
  );
}

export default withTranslate(App);

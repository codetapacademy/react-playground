import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PhoneNumber } from './component/phone-number';

function App() {
  return (
    <div className="App">
      <PhoneNumber number="12312312312" />
    </div>
  );
}

export default App;

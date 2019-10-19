import React from 'react';
import './App.css';
import { PhoneNumber } from './component/phone-number';
import { NiceForm } from './component/nice-form';

function App() {
  return (
    <div className="App">
      <PhoneNumber number="12312312312" />
      <NiceForm />
    </div>
  );
}

export default App;

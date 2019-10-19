import React from 'react';
import './App.css';
import { PhoneNumber } from './component/phone-number';
import { NiceForm } from './component/nice-form';
import { getMessage } from './component/nice-form/nice-form.api';

function App() {
  return (
    <div className="App">
      <PhoneNumber number="12312312312" />
      <NiceForm getMessage={getMessage} />
    </div>
  );
}

export default App;

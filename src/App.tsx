import React from 'react';
import logo from './logo.svg';
import './App.css';

import Formulario from './components/form';
import Lista from './components/lista';
import Cronometro from './components/Cronometro';

function App() {
  return (
    <div>
      <Formulario/>
      <Cronometro/>
      <Lista/>
    </div>
  );
}

export default App;

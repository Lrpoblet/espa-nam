import '../styles/App.scss';

import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Madrid from './Madrid';
import Spain from './Spain';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [AC, setAC] = useState('');

  function ACChange(value) {
    setAC(value);
  }

  return (
    <div>
      <Header AC={AC} ACChange={ACChange} />
      <Routes>
        <Route path="/" element={<Spain />}></Route>
        <Route path="/Madrid" element={<Madrid />}></Route>
        <Route path="/Card" element={<Card />}></Route>
      </Routes>
    </div>
  );
}

export default App;

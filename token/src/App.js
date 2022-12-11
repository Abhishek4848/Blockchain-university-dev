import logo from './logo.svg';
import './App.css';
import Wallet from './Wallet.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/token/:ssn' element={<Wallet/>}/>
      </Routes>
    </div>
  );
}

export default App;

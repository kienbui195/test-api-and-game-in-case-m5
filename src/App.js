import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import GameHighOrLow from './components/GameHighOrLow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>}>
          <Route path='game1' element={<GameHighOrLow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

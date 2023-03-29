import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import CreateCategory from './components/CreateCategory';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/category' element={<Category />} />
          <Route path='/categorycreate' element={<CreateCategory/>} />

      </Routes>
    </>
  );
}

export default App;

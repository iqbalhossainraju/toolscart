import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import Pages from './Pages/Home/Pages';
import Products from './Pages/Home/Products';
import Shop from './Pages/Home/Shop';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/product' element={<Products />}></Route>
        <Route path='/page' element={<Pages />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;

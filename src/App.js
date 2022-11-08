import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Login/Register';
import Pages from './Pages/Home/Pages';
import Products from './Pages/Home/Products';
import Shop from './Pages/Home/Shop';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

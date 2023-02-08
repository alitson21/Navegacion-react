import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Page/Home'
import Blog from '../Page/Blog';
import Imagenes from '../Page/Imagenes';
import NoPage from '../Page/NoPage';
import Navbar from './Navbar';
import Proyectos from '../Page/Proyectos';


function Proxy() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/imagenes' element={<Imagenes></Imagenes>}></Route>
        <Route path='/proyectos' element={<Proyectos></Proyectos>}></Route>
        <Route path='*' element={<NoPage></NoPage>}></Route>
      </Routes>
    </Router>

  );
}

export default Proxy;

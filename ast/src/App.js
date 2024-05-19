
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from './components/Login.jsx'
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Product from './components/Product.jsx';
import ProductForm from './components/ProductForm.jsx';
import ProductCard from './components/ProductCard.jsx';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/products' element={<Product/>}></Route>
    <Route path='/create' element={<ProductForm/>}></Route>
    <Route path='/view/:id' element={<ProductCard />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

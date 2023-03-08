import { Route, Routes } from 'react-router-dom';
import AboutPage from './Components/About';

import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Contact from './Components/Contact';
import Login from './Components/Login';
import ProductDetailsPage from './Components/ProductDetailsPage';
import Shop from './Components/Shop';
import Signup from './Components/Signup';
import Wish from './Components/Wish';
import Home from './Pages/Home';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wish />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/:id' element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;

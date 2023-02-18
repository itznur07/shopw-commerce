import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

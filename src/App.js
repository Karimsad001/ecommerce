import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    Aos.init();
  })
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/ecommerce/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;

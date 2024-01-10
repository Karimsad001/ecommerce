import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;

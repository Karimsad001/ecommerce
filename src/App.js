import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
// import NotFound from './components/NotFound';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product/:productId' element={<ProductDetails />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
export default App;

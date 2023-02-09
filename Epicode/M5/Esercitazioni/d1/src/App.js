import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import ProductsCard from './components/ProductsCard';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Marquee />
      <Counter />
      <ProductsCard/>
    </div>
  );
}

export default App;

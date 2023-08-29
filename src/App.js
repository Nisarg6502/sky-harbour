// import './App.css';
import Footer from './components/Footer';
import NavbarMain from './components/NavbarMain';
import Landing from './components/Landing';
import About from './components/About';
import Product from './components/Products';
import Whatsapp from './components/Whatsapp';
function App() {
  return (

    <div className="App">
      <NavbarMain></NavbarMain>
      <Landing></Landing>
      <About></About>
      <Product></Product>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
    </div>

  );
}

export default App;

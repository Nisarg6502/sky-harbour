// import './App.css';
import Footer from './components/Footer';
import NavbarMain from './components/NavbarMain';
import Home from './pages/Home';
import Whatsapp from './components/Whatsapp';
import ScrollTop from './components/ScrollTop';
// import Contact from './pages/Contact';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavbarMain></NavbarMain>

        <Routes>
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/" element={<Home />} />

        </Routes>
        <Footer></Footer>
        <Whatsapp></Whatsapp>
        <ScrollTop></ScrollTop>
      </BrowserRouter>
    </div>

  );
}

export default App;

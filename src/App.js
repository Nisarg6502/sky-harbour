import Footer from './components/Footer';
import NavbarMain from './components/NavbarMain';
import Home from './pages/Home';
import Whatsapp from './components/Whatsapp';
import ScrollTop from './components/ScrollTop';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <NavbarMain />
      <Home />
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </div>
  );
}

export default App;

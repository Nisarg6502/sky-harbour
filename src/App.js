import { useEffect } from 'react';
import Footer from './components/Footer';
import NavbarMain from './components/NavbarMain';
import Home from './pages/Home';
import Whatsapp from './components/Whatsapp';
import ScrollTop from './components/ScrollTop';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (!loader) return;
    loader.classList.add('is-hidden');
    const removeLoader = () => loader.remove();
    loader.addEventListener('transitionend', removeLoader, { once: true });
    return () => loader.removeEventListener('transitionend', removeLoader);
  }, []);

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

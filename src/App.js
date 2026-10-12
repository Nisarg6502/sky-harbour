import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Footer from './components/Footer';
import NavbarMain from './components/NavbarMain';
import Home from './pages/Home';
import Whatsapp from './components/Whatsapp';
import ScrollTop from './components/ScrollTop';

// The logo intro in public/index.html needs ~1.5s to finish writing the wordmark.
const INTRO_MIN_MS = 1550;

function App() {
    useEffect(() => {
        const root = document.documentElement;
        const intro = document.getElementById('sh-intro');

        if (!intro || root.classList.contains('sh-skip-intro')) {
            intro?.remove();
            root.classList.add('sh-ready');
            return;
        }

        const lift = () => {
            root.classList.add('sh-ready');
            intro.classList.add('is-leaving');
            intro.addEventListener('transitionend', () => intro.remove(), { once: true });
            // Safety net in case transitionend never fires (e.g. background tab).
            setTimeout(() => intro.remove(), 1600);
        };

        const wait = Math.max(0, INTRO_MIN_MS - performance.now());
        const timer = setTimeout(lift, wait);
        return () => clearTimeout(timer);
    }, []);

    return (
        <MotionConfig reducedMotion="user">
            <div className="App">
                <NavbarMain />
                <Home />
                <Footer />
                <Whatsapp />
                <ScrollTop />
            </div>
        </MotionConfig>
    );
}

export default App;

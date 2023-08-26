// import './App.css';
import Footer from './components/Footer';
import NavbarMain from './components/NavbarMain';
import Landing from './components/Landing';
// import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    // <NextUIProvider>
    <div className="App">
      <NavbarMain></NavbarMain>
      <Landing></Landing>
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      <p>lorem ipsum</p>
      <Footer></Footer>
    </div>
    // </NextUIProvider>
  );
}

export default App;

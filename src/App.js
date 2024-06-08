import NavBar from './components/NavBar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import './index.css';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;

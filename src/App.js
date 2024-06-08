import NavBar from './components/NavBar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import './index.css';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;

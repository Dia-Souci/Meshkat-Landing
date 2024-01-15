//import logo from './logo.svg';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Features from './Components/features/Features';
import Counter from './Components/Counter/counter';
import BlackLinks from './Components/Black-links/BlackLinks';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Counter />
      <Features/>
      <BlackLinks/>
    </div>
  );
}

export default App;

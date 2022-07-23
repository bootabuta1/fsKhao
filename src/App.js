import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Top from './components/Top';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Top/>
      <Home/>
        
      <Footer/>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import DownloadApp from './components/DownloadApp';
import TopUpWallet from './components/TopUpWallet';
import TrackOrders from './components/TrackOrders'
import Nearby from './components/Nearby';
import PrivacyPolicy from './components/PrivacyPolicy'
import TandC from './components/TandC'

function App() {
  return (
    <div className='my-container'>
      <Router>

        <Header/>

        <Routes>

          /* ------------ Routes ------------- */

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about-freshkhao" element={<About/>}/>
          <Route path="/freshkhao-contact" element={<Contact/>}/>
          <Route path="/download-app" element={<DownloadApp/>}/>
          <Route path="/top-up-your-app-wallet" element={<TopUpWallet/>}/>
          <Route path="/track-freshkhao-order" element={<TrackOrders/>}/>
          <Route path="/freshkhao-store" element={<Nearby/>}/>
          <Route path="/terms-conditions-freshkhao" element={<TandC/>}/>
          <Route path="/freshkhao-privacy-policy" element={<PrivacyPolicy/>}/>

          /* ------------ End of Routes ------------- */

        </Routes>  

        <Footer/>

      </Router>
    </div>
  );
}

export default App;

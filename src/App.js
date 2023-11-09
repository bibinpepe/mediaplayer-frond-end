
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';
import Landingpage from './pages/Landingpage';

function App() {
  return (
    <div>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
        
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;

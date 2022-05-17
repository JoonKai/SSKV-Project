import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cost from './pages/Cost';
import Mocvd from './pages/Mocvd';
import Measurement from './pages/Measurement';
import Test from './pages/Test';
import Data from './data/myData'; 
import Header from './components/Grobal/Header';
import Footer from './components/Grobal/Footer';


function App() {
  const data=Data;
  return (
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Cost" element={<Cost/>}/>
        <Route path="/Mocvd" element={<Mocvd/>}/>
        <Route path="/Test" element={<Test data={data}/>}/>
        <Route path="/Measurement" element={<Measurement/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

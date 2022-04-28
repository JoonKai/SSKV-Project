import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cost from './pages/Cost';
import Mocvd from './pages/Mocvd';
import Measurement from './pages/Measurement';
import Test from './pages/Test';
import Data from './data/myData'; 
import MainHeader from './components/Grobal/MainHeader';


function App() {
  const data=Data;
  return (
    <Router>
      <MainHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Cost" element={<Cost/>}/>
        <Route path="/Mocvd" element={<Mocvd/>}/>
        <Route path="/Test" element={<Test data={data}/>}/>
        <Route path="/Measurement" element={<Measurement/>}/>
      </Routes>
    </Router>
  );
}

export default App;

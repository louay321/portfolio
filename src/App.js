import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Skills from './Pages/Skills/Skills';


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    
    <Routes>
      <Route  path='/' exact element={<Home />}></Route>
      <Route  path='/Skills' element={<Skills />}></Route>
    </Routes>
      </Router>
    </div>
  );
}

export default App;

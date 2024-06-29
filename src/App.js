
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route  path="/signup" element={<Signup/>} />
            
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;

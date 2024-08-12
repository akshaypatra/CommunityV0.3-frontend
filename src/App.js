
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/login" element={<LoginPage/>} />
            <Route  path="/profile" element={<ProfilePage/>} />
            <Route  path="/profile/edit_profile" element={<EditProfilePage/>} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import NoteFusion from './pages/NoteFusion';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  // eslint-disable-next-line
  const showAlert=(message,type)=>{

          
    setAlert({
              msg:message,
              type:type
                })
    setTimeout(() => {
                setAlert(null);
              }, 2000);
  }
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>}  />
            <Route  path="/signup" element={<Signup showAlert={showAlert}/>}  />
            <Route  path="/login" element={<LoginPage showAlert={showAlert}/>} />
            <Route  path="/profile" element={<ProfilePage showAlert={showAlert} />} />
            <Route  path="/note_fusion" element={<NoteFusion showAlert={showAlert} />} />
            <Route  path="/profile/edit_profile" element={<EditProfilePage showAlert={showAlert}/>}  />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;

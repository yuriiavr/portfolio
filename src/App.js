import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLaout';
import Homepage from './pages/Home/Home';
import Luna from './components/Projects/ProjectList/ProjectPage/Luna/Luna';
import EmailSender from './components/Projects/ProjectList/ProjectPage/EmailSender/EmailSender';
import PasswordManager from './components/Projects/ProjectList/ProjectPage/PasswordManager/PasswordManager';
import Melomaniac from './components/Projects/ProjectList/ProjectPage/Melomaniac/Melomaniac';
import CV from 'pages/CV/CV';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects/luna' element={<Luna />} />
          <Route path='/projects/emailSender' element={<EmailSender />} />
          <Route path='/projects/melomaniac' element={<Melomaniac />} />
          <Route path='/projects/passwordManager' element={<PasswordManager />} />
          <Route path='/cv' element={<CV />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

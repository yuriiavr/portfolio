import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLaout';
import Homepage from './pages/Home/Home';
import Luna from './components/Projects/ProjectList/ProjectPage/Luna/Luna';
import EmailSender from './components/Projects/ProjectList/ProjectPage/EmailSender/EmailSender';
import Cinema from './components/Projects/ProjectList/ProjectPage/Cinema/Cinema';
import Phonebook from './components/Projects/ProjectList/ProjectPage/PhoneBook/Phonebook';
import Blog from './components/Projects/ProjectList/ProjectPage/Blog/Blog';
import Melomaniac from './components/Projects/ProjectList/ProjectPage/Melomaniac/Melomaniac';
import Paws from './components/Projects/ProjectList/ProjectPage/Paws/Paws';
import ImageShare from './components/Projects/ProjectList/ProjectPage/ImageShare/ImageShare';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects/luna' element={<Luna />} />
          <Route path='/projects/emailSender' element={<EmailSender />} />
          <Route path='/projects/melomaniac' element={<Melomaniac />} />
          <Route path='/projects/cinema' element={<Cinema />} />
          <Route path='/projects/phonebook' element={<Phonebook />} />
          <Route path='/projects/blog' element={<Blog />} />
          <Route path='/projects/imageshare' element={<ImageShare />} />
          <Route path='/projects/paws' element={<Paws />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLaout';
import Homepage from './pages/Home/Home';
import Luna from './components/Projects/ProjectList/ProjectPage/Luna/Luna';
import EmailSender from './components/Projects/ProjectList/ProjectPage/EmailSender/EmailSender';
import Balans from './components/Projects/ProjectList/ProjectPage/Balans/Balans';
import Phonebook from './components/Projects/ProjectList/ProjectPage/PhoneBook/Phonebook';
import Blog from './components/Projects/ProjectList/ProjectPage/Blog/Blog';
import Melomaniac from './components/Projects/ProjectList/ProjectPage/Melomaniac/Melomaniac';
import Paws from './components/Projects/ProjectList/ProjectPage/Paws/Paws';
import Deadlines from './components/Projects/ProjectList/ProjectPage/deadlines/deadlines';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects/luna' element={<Luna />} />
          <Route path='/projects/emailSender' element={<EmailSender />} />
          <Route path='/projects/melomaniac' element={<Melomaniac />} />
          <Route path='/projects/balans' element={<Balans />} />
          <Route path='/projects/phonebook' element={<Phonebook />} />
          <Route path='/projects/blog' element={<Blog />} />
          <Route path='/projects/deadlines' element={<Deadlines />} />
          <Route path='/projects/paws' element={<Paws />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

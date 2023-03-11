import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLaout';
import Homepage from './pages/Home/Home';
import Webstudio from './components/Projects/ProjectList/ProjectPage/WebStudio/Webstudio';
import GiftStore from './components/Projects/ProjectList/ProjectPage/GiftStore/GiftStore';
import Cinema from './components/Projects/ProjectList/ProjectPage/Cinema/Cinema';
import Phonebook from './components/Projects/ProjectList/ProjectPage/PhoneBook/Phonebook';
import Blog from './components/Projects/ProjectList/ProjectPage/Blog/Blog';
import IceCream from './components/Projects/ProjectList/ProjectPage/IceCream/IceCream';
import Paws from './components/Projects/ProjectList/ProjectPage/Paws/Paws';
import ImageShare from './components/Projects/ProjectList/ProjectPage/ImageShare/ImageShare';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects/webstudio' element={<Webstudio />} />
          <Route path='/projects/giftstore' element={<GiftStore />} />
          <Route path='/projects/icecream' element={<IceCream />} />
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

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import { Home, About, Announcement, Courses, Faqs, Map, News, People, LecturerDashboard, Login, Register, AdminDashboard, Delete, Post, Update   } from './pages';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        {/* Students */}
        
        <Route path='/'  element={<Home />} />
        <Route path='/user/about' element={<About />} />
        <Route path='/user/announcement' element={<Announcement />} />
        <Route path='/user/courses' element={<Courses />} />
        <Route path='/user/faqs' element={<Faqs />} />
        <Route path='/user/map' element={<Map />} />
        <Route path='/user/news' element={<News />} />
        <Route path='/user/people' element={<People />} />
      </Routes>  
      </Layout>
      <Routes>

        {/* Lecturer */}
        <Route path='/lecturer/register' element={<Register />} />
        <Route path='/lecturer/login' element={<Login />} />
        <Route path='/lecturer/dashboard' element={<LecturerDashboard />} />

        {/* Admin */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/delete' element={<Delete />} />
        <Route path='/admin/post' element={<Post />} />
        <Route path='/admin/update' element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;

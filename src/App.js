import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound'
import { ComingSoon } from './Pages/ComingSoon'
import { Home } from './Pages/Home'
import { Portfolio } from './Pages/Portfolio'
import { FAQ } from './Pages/FAQ'
import { ContactPage } from './Pages/Contact'
import { BlogPost, BlogScroll } from './Pages/Blog'
import { Dashboard } from './Pages/Dashboard'
import { Logout } from './Pages/Logout'
import { AuthProvider } from './Contexts/UserContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogScroll />} />
          <Route path='/blog/post/:postId' element={<BlogPost />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} /> */}
          <Route path="*" element={<NotFound />} />

          {/* Default Deployment Route */}
          {/* <Route path="*" element={<ComingSoon />}></Route> */}
        </Routes>
      </AuthProvider>
    </Router>

  );
}

export default App;

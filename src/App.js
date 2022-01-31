import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound'
import ComingSoon from './Pages/ComingSoon'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Dashboard from './Pages/Dashboard'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<NotFound />} />

        {/* Default Deployment Route */}
        {/* <Route path="*" element={<ComingSoon />}></Route> */}
      </Routes>

    </Router>

  );
}

export default App;

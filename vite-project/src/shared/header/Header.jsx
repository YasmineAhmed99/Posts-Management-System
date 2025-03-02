import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNav from './MainNav'
import Home from '../../pages/HomePage'
import About from '../../pages/AboutPage'
import './style.css'

function Header() {
  return (
    <Router>
    <MainNav />
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
}

export default Header;

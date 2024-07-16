import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { AboutPage } from "./pages/about-page/AboutPage";
import { ContactPage } from "./pages/contact-page/ContactPage";

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <footer>footer</footer>
    </div>
  );
};

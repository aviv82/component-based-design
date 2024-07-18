import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page/HomePage";
import { AboutPage } from "../pages/about-page/AboutPage";
import { NavBar } from "../components/nav-bar/NavBar";
import { Footer } from "../components/footer/Footer";
import { ContactPage } from "../pages/contact-page/ContactPage";
import { CONTACTS } from "../consts/contacts";
import { ContactDetail } from "../components/contact/ContactDetail";

export const Root = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage header="home page" />}></Route>
        <Route
          path="/about"
          element={<AboutPage header="about page" />}
        ></Route>
        <Route
          path="/contact"
          element={<ContactPage header="contact page" />}
        ></Route>
        {CONTACTS.map((c, i) => (
          <Route
            key={i}
            path={`contact/${c.id}`}
            element={<ContactDetail name={c.name} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

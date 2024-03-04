import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
// import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
      </div>
    </Router>
  );
}

export default App;
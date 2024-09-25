

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home_landing/Navbar';
import Home from './components/Home_landing/Home';
import TeacherLogin from './components/Home_landing/TeacherLogin';
import StudentLogin from './components/Home_landing/StudentLogin';
import AdminLogin from './components/Home_landing/AdminLogin';
import About from './components/Home_landing/About';
import Contact from './components/Home_landing/Contact';
import MCQGenerator from './components/MCQGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher" element={<TeacherLogin />} />
            <Route path="/student" element={<StudentLogin />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mcqqgeneraor" element={<MCQGenerator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


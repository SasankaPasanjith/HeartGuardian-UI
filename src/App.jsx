import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Info, Topics, Blog, Prediction, Testimonials, Footer } from './components';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header id="header" />
            <Topics id="topics" />
            <Info id="info" />
            <Blog id="blog" />
            <Prediction id="prediction" />
            <Testimonials id="testimonials" />
            <Footer id="footer" />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

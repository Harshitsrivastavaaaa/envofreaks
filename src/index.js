import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/envofreaks' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/Signup' element={<Signup />} /> */}
      {/* <Route path='/' element={<img src={logo} alt="EnvoFreaks Logo" height="500px" width="350px" />} /> */}

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

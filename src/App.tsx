import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AboutPage from './pages/AboutPage';
import TopPage from './pages/TopPage';

//v6からはSwtich使えなくなった
//componentプロパティからelementへ変更されて、propsを渡せる形に
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;

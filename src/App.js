import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import за React Router
import Navbar from './components/Navbar';  // Навигација
import WordsReminder from './components/WordsReminder';  // Words Reminder компонента
import CodingPage from './components/CodingPage';  // Code Reminder компонента

function App() {
  return (
    <Router> 
      <Navbar />  {/* Навигација секогаш ќе биде присутна */}
      <Routes>
        <Route path="/" element={<WordsReminder />} /> {/* Подразбирачка рута / */}
        <Route path="/coding" element={<CodingPage />} /> {/* Рута за /coding */}
      </Routes>
    </Router>
  );
}

export default App;

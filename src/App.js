import React from 'react';
import "./App.css";
import "./pages/header";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './pages/header';
import Predict from './pages/Predict';
import Courses from './pages/Courses';
import C_quize from "./pages/C_quiz";
import A_quize from "./pages/A_quiz";
import About_us from './pages/About_us';
import Instruction from './pages/Instruction';
import Basic from './pages/Basic';
import A_quizresult from './pages/A_quizresult';
import C_quizresult from './pages/C_quizresult';
import Final_prediction from './pages/Final_prediction';

function App() {
  return (
    <div className="App">
  
   <BrowserRouter>
   <Header></Header>
    <Routes>
      <Route path="/" element={<Courses></Courses>}></Route>
      <Route path="/predict" element={<Predict></Predict>}></Route>
      <Route path="/About_us" element={<About_us></About_us>}></Route>
      <Route path="/C_quiz" element={<C_quize></C_quize>}></Route>
      <Route path="/A_quiz" element={<A_quize></A_quize>}></Route>
      <Route path="/Instruction" element={<Instruction></Instruction>}></Route>
      <Route path="/Basic" element={<Basic></Basic>}></Route>
      <Route path="/A_quizresult" element={<A_quizresult></A_quizresult>}></Route>
      <Route path="/C_quizresult" element={<C_quizresult></C_quizresult>}></Route>
      <Route path ="/Final_prediction" element={<Final_prediction></Final_prediction>}></Route>
      
    </Routes>
   </BrowserRouter>
  
   
    </div>
  );
}

export default App;

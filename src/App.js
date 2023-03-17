import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import PaymentSuccess from './component/PayementSuccessfull';
import PageNotFound from './component/PageNotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/paymentSuccess/:id' element={<PaymentSuccess/>} />
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Reginstration from "./components/Reginstration";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/" element={<Reginstration />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      {/* <LoginPage/>
      <Reginstration/> */}
    </div>
  );
}

export default App;

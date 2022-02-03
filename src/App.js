import React from "react";
// import { Router, Routes } from "react-router-dom";
import "./App.css";
import PreLoader from "./Components/Index/PreLoader";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <PreLoader />
      <MainRoutes />
    </>
  );
}

export default App;

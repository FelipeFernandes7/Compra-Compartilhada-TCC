import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Loading from "./components/Loading";

export function App(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/loading" exact element={<Loading/>} />
        </Routes>
      </BrowserRouter>
    )
}
export default App;
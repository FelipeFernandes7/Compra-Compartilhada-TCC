import React from "react";
import { Route, BrowserRouter, } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register"; 

const Render = () => {
   return(
       <BrowserRouter>
          
          <Route path="/login" component={Login} />
           <Route  path="/register" exact component={Register} />
       </BrowserRouter>
   )
}

export default Render;
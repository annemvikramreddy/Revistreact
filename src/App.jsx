import { BrowserRouter, Route, Routes,Link} from "react-router-dom"
import { useState } from "react";
import './App.css'
import Search from "./components/Search/index.jsx";
import Home from "./components/Home/index.jsx";

import Card from "./components/Card/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import Context from "./Context/Context.jsx";



const App=()=>{
  
    return(  <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={
            <ProtectedRoute element={<Search />} />
          } />
          <Route path="/card" element={
            <ProtectedRoute element={<Card />} />
          } />
        </Routes>
        
      </div>
      
    </BrowserRouter>
  )
}


  

export default App;

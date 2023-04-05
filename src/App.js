import Main from "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MenuYannick } from './container'


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/YannickOuellet" element={<MenuYannick/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;

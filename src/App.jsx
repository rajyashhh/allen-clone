import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return <div>
   <BrowserRouter>
   <Link to="/class10">Class 10</Link>
   <Link to="/">Allen</Link>
   <Link to="/neet/online-class-11">Neet Class 11</Link>
    <Routes>
      
      <Route path="/neet/online-class-11" element={<Class11Program/>}/>
      <Route path="/" element={<Landing/>}/>
      <Route path="/class10" element={<Class10/>}/>
    </Routes>
   </BrowserRouter>
  </div>
}

function Class11Program(){
  return <div>
    NEET programs for Class 11
  </div>
}
function Landing(){
  return <div>
    This is the default landing page for Allen.in
  </div>
}
function Class10(){
  return <div>
    Class 10 programs are still under consideration
  </div>
}
export default App

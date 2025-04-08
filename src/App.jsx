import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'



function App() {
  return <div>
   <BrowserRouter>
   
    <Routes>
      
      <Route path="/" element={<Layout/>}>
        <Route path="/neet/online-class-11" element={<Class11Program/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/class10" element={<Class10/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
      
       
    </Routes>
   </BrowserRouter>
  </div>
}

function Layout(){
  return <div>
    <Link to="/class10">Class 10</Link>
   <Link to="/">Allen</Link>
   <Link to="/neet/online-class-11">Neet Class 11</Link>
    Headers
    <Outlet/>
    Footers
  </div>
}

function ErrorPage(){
  return <div>
    Sorry Page not found at our servers! This page is the default error page.
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
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return <div>
    Class 10 programs are still under consideration
    <button onClick={redirectUser}>Go back to the landing page!</button>
  </div>
}
export default App

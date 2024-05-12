

import './App.css'
import {Route, Routes} from "react-router-dom"

import IndexPage from './pages/indexPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signupPage'
import Layout from './layout'
import CarsPage from './pages/carsPage'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
   
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/cars" element={<CarsPage/>}/>
      </Route>
    </Routes>
    // <div>    <Navbar/>
    // <Hero/>
    // <Cars/>
    // <Login/>
    // <Signup/>
    // <Categories/>
    // <AboutUs/>
    
    // </div>

  )
}

export default App



import './App.css'
import {Route, Routes} from "react-router-dom"

import IndexPage from './pages/indexPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signupPage'
import Layout from './layout'
import CarsPage from './pages/carsPage'
import UserContextProvider from './userContext'

import axios from 'axios'
import ProfilePage from './pages/accountsPage'
import AllCars from './pages/allCars'
import CarsFormPage from './pages/carsFormPage'


axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  


  return (

 <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
   
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/cars" element={<AllCars/>}/>
      <Route path="/account/:subpage?" element={<ProfilePage/>}/>
      <Route path="/account/cars" element={<CarsPage/>}/>
      <Route path="/account/cars/new" element={<CarsFormPage/>}/>
      <Route path="/account/cars/:id" element={<CarsFormPage/>}/>
  
      
      </Route>
    </Routes>
    </UserContextProvider>

  )
}

export default App

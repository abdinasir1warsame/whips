

import './App.css'
import {Route, Routes} from "react-router-dom"

import IndexPage from './pages/indexPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signupPage'
import Layout from './layout'
import CarsPage from './pages/carsPage'
import UserContextProvider from './userContext'

import axios from 'axios'
import AccountPage from './pages/accountsPage'


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
      <Route path="/cars" element={<CarsPage/>}/>
      <Route path="/account/:subpage?" element={<AccountPage/>}/>
      <Route path="/account/:subpage/:action" element={<AccountPage/>}/>
      {/* <Route path="/account/profile" element={<AccountPage/>}/>
      <Route path="/account/favourites" element={<AccountPage/>}/>
      <Route path="/account/bookings" element={<AccountPage/>}/> */}
      
      </Route>
    </Routes>
    </UserContextProvider>

  )
}

export default App

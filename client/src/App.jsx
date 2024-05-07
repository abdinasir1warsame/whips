

import './App.css'
import Cars from './components/cars/cars'
import Hero from './components/hero/hero'
import Login from './components/login-signup/login'
import Signup from './components/login-signup/signup'
import Navbar from './components/navbar/navbar'

function App() {


  return (
    <div>    <Navbar/>
    <Hero/>
    <Cars/>
    <Login/>
    <Signup/>
    
    </div>

  )
}

export default App

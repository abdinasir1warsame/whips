import React, { useContext } from "react";
import "./navbar.css"

import Logo from "../../assets/nav-images/new-logo2.png"
import { Link } from "react-router-dom";
import { userContext } from "../../userContext";



const Navbar = () => {
 const {user} =  useContext(userContext)


    return (
        <div>
<div className="mobile-nav-wrapper">  
  <nav className="mobile ">
    <input type="checkbox" id="menu" name="menu" className="m-menu__checkbox"/>
    <label className="m-menu__toggle" htmlFor="menu">
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </label>
    <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 object-cover absolute top-0 right-0   "
            />
          </div>
    <label className="m-menu__overlay" htmlFor="menu"></label>
  
    <div className="m-menu">
      <div className="m-menu__header">
        <label className="m-menu__toggle" htmlFor="menu">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </label>
        {!!user && (<span>{user.name}</span>)}
       
        
      </div>
      <ul>
        <li><a href=""><label>our cars</label></a></li>
        <li>
          <label className="a-label__chevron" htmlFor="item-2">car brands</label>
          <input type="checkbox" id="item-2" name="item-2" className="m-menu__checkbox"/>
          <div className="m-menu">
            <div className="m-menu__header">
              <label className="m-menu__toggle" htmlFor="item-2">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>car brands</span>
            </div>
            <ul>
            
              <li><a href=""><label>mercedes</label></a></li>
              <li><a href=""><label>bmw</label></a></li>
              <li><a href=""><label>land rover</label></a></li>
              <li><a href=""><label>nissan</label></a></li>
              <li><a href=""><label>audi</label></a></li>
              <li><a href=""><label>toyota</label></a></li>
              <li><a href=""><label>tesla</label></a></li>
            </ul>
          </div>
        </li>
        {/* <li><a href=""><label>our offers</label></a></li> */}
        <li><a href=""><label>rental policy</label></a></li>
        {/* <li><a href=""><label>blog</label></a></li> */}
        <li><a href=""><label>about us</label></a></li>
        <li><a href=""><label>contact us</label></a></li>
      </ul>  
    </div> 
  </nav>
  <div className="mobile-logo-wrapper" onClick="goToHome()">
    <img src="" alt="" className="mobile-logo"/>
  </div>
  
</div>

        <section className=" main-nav py-4 flex flex-row justify-between px-10 ">         
 <div className="link"><Link to={'/'}>Home</Link></div>
 <Link to={'/'}>
            <img
              src={Logo}
              alt=""
              className="w-40 h-32 object-cover absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 "
            />
          </Link>
 <div className="flex gap-8 justify-center "><Link to={user?"/cars":"/login"} className="link">Our Cars</Link><Link to={user?"/account":"/login"} className="link">Account</Link>
 {!user ? (
            // If there is no user logged in
            <>
              <Link to="/login" className="link background-btn2 ml-2 py-2 px-5 rounded-2xl">
                LOGIN
              </Link>
              <Link to="/signup" className="link background-btn2 ml-2 py-2 px-5 rounded-2xl text-shadow ">
               SIGN UP
              </Link>
            </>
          ) : (
            // If there is a user logged in
            <div className=" link background-btn2 ml-2 py-1 px-5 rounded-2xl text-shadow">
              LOG OUT
            </div>
          )}

 </div>
</section>
</div>
    )
}

export default Navbar
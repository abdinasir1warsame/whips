import React, { useContext } from "react";
import "./navbar.css"
import AudiLogo from "../../assets/nav-images/audi-logo.png"
import LandroverLogo from "../../assets/nav-images/landrover-logo.png"
import MercedesLogo from "../../assets/nav-images/mercedes-logo.png"
import NissanLogo from "../../assets/nav-images/nissan-logo.png"
import ToyotaLogo from "../../assets/nav-images/toyota-logo.png"
import { Link } from "react-router-dom";
import { userContext } from "../../userContext";


const Navbar = () => {
 const {user} =  useContext(userContext)
    return (
        <div>
<div className="mobile-nav-wrapper">  
  <nav className="mobile">
    <input type="checkbox" id="menu" name="menu" className="m-menu__checkbox"/>
    <label className="m-menu__toggle" htmlFor="menu">
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </label>
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

        <section className="navigation-bar">         
  <div className="first-half"> 
    <ul className="navigation-list">
    <Link to={"/"} className="sixth-li-container navigation-boxes"><a href="">
          <li>Home</li>
        </a> 
      </Link>
      <div className="list-wrapper">
        
      <Link to={user?"/cars":"/login"} className="first-li-container navigation-boxes"><a href=""> 
          <li>Our Cars</li>
        </a>
      </Link> 
      
    <div className="car-category-wrapper">
        <a href=""><div className="suv-container category-car-box"><span className="category-title"> 4 x 4 </span></div></a>
      <a href=""><div className="luxury-container category-car-box"><span className="category-title"> LUXURY </span></div></a>
      <a href=""><div className="sports-container category-car-box"><span className="category-title"> SALOON </span></div></a>
      <a href=""><div className="exotic-container category-car-box"><span className="category-title"> HATCHBACK </span></div></a>
    </div>
      </div> 
      {/* <div className="car-brands-list-wrapper">
      <div className="second-li-container navigation-boxes">
        <a href="">
          <li>Car Brands</li>
        </a>
      </div>
        <div className="car-brands-container">
    
           <a href="">
            <div className="mercedes car-brand">
              <img src={MercedesLogo} alt=""/>
              <span>MERCEDES</span>
            </div>
          </a>
     

   
           <a href="">
            <div className="landRover car-brand">
              <img src={LandroverLogo} alt=""/>
              <span>LAND ROVER</span> 
            </div>
          </a>
           <a href="">
            <div className="nissan car-brand">
              <img src= {NissanLogo} alt=""/>
              <span>NISSAN</span>
            </div>
          </a>
  
           <a href="">
            <div className="audi car-brand">
              <img src= {AudiLogo} alt=""/>
              <span>AUDI</span>
            </div>
          </a>
  
          <a href=""> 
            <div className="toyota car-brand">
              <img src= {ToyotaLogo} alt=""/>
              <span>TOYOTA</span>
            </div>
          </a>
        </div>
      </div> */}

      <Link to={"/account"} className="sixth-li-container navigation-boxes"><a href="">
          <li>Account</li>
        </a> 
      </Link>
      <div className="seventh-li-container navigation-boxes"><a href="">
          <li>Contact Us</li>
        </a> 
      </div>
    </ul>
  </div>
  <div className="second-half">
    
  {!user ? (
            // If there is no user logged in
            <>
              <Link to="/login" className="register-now-btn">
                <span>LOGIN</span>
              </Link>
              <Link to="/signup" className="register-now-btn">
                <span>SIGN UP</span>
              </Link>
            </>
          ) : (
            // If there is a user logged in
            <div className="register-now-btn">
              <span>SIGN OUT</span>
            </div>
          )}
    
  </div>
</section>
</div>
    )
}

export default Navbar
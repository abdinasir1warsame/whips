import React, { useContext, useState } from "react";
import axios from 'axios'
import "./navbar.css";
import Logo from "../../assets/nav-images/new-logo2.png";
import { Link } from "react-router-dom";
import { userContext } from "../../userContext";

const Navbar = () => {
  const { user,setUser} = useContext(userContext)
  const [toHomePage, setToHomepage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  async function logout () {
    await axios.post('/logout')
    setUser(null)
    setToHomepage("/")
  }
  return (
    <div>
      <div className="mobile-nav-wrapper">
        <nav className="mobile">
          <input
            type="checkbox"
            id="menu"
            name="menu"
            className="m-menu__checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label className="m-menu__toggle" htmlFor="menu" >
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs" >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </label>
          <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 object-cover absolute top-0 right-0"
            />
          </div>
          <label className="m-menu__overlay" htmlFor="menu"></label>

          <div className="m-menu">
            <div className="m-menu__header" >
              <label className="m-menu__toggle" htmlFor="menu" >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs" >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </label>
              {!!user && (<span>{user.name}</span>)}
            </div>
            <ul>
            <li><Link to={'/'} onClick={handleLinkClick}><label>Home</label></Link></li>
            <li><Link to={user ? "/cars" : "/login"} onClick={handleLinkClick}><label>All Cars</label></Link></li>
              <li><Link to={user ? "/account" : "/login"} onClick={handleLinkClick}><label>My Account</label></Link></li>
              <li><a href="" onClick={handleLinkClick}><label>Faq</label></a></li>
              <li><a href="" onClick={handleLinkClick}><label>contact us</label></a></li>
            </ul>
          </div>
        </nav>
        <div className="mobile-logo-wrapper" onClick={() => setIsMenuOpen(false)}>
          <img src="" alt="" className="mobile-logo" />
        </div>
      </div>

      <section className="main-nav py-4 flex flex-row justify-between px-10">
        <div className="link"><Link to={'/'}>Home</Link></div>
        <Link to={'/'}>
          <img
            src={Logo}
            alt=""
            className="w-40 h-32 object-cover absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0"
          />
        </Link>
        <div className="flex gap-8 justify-center">
          <Link to={user ? "/cars" : "/login"} className="link">All Cars</Link>
          <Link to={user ? "/account" : "/login"} className="link">Account</Link>
          {!user ? (
            <>
              <Link to="/login" className="link background-btn2 ml-2 py-2 px-5 rounded-2xl">LOGIN</Link>
              <Link to="/signup" className="link background-btn2 ml-2 py-2 px-5 rounded-2xl text-shadow">SIGN UP</Link>
            </>
          ) : (
            <div onClick={logout} className="link background-btn2 ml-2 py-1 px-5 rounded-2xl text-shadow" >LOG OUT</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navbar;

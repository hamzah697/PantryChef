import {useState} from 'react'
import '../global.css';
import { useEffect } from 'react';
import { useRef } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 const dropdownRef= useRef(null)

 useEffect(()=>{
           document.addEventListener("click",(event)=>{
             
                if(!dropdownRef.current.contains(event.target)){
                  setIsOpen(false)
                } 
 
              
           });
 },[])
      
  return (
    <nav className="navbar">
      <div className="parent">

      
        <a href="#" className="logo">
          Pantry<span>Chef</span>
        </a>

        
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li className="dropdown" ref={dropdownRef}>
              <button
                className="dropdown-trigger"
                onClick={() => setIsOpen(!isOpen)}
              >
                Find Recipes
                <span className={`chevron ${isOpen ? 'open' : ''}`}>
                  ▾
                </span>
              </button>

              {isOpen && (
                <ul className="dropdown-menu" >
                  <li>
                    <a href="#">
                      <span className="menu-title">All Recipes</span>
                      <span className="menu-description">
                        Explore everything
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span className="menu-title">Savory</span>
                      <span className="menu-description">
                        Meals & main dishes
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span className="menu-title">Desserts</span>
                      <span className="menu-description">
                        Something sweet
                      </span>
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#">Favorites</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
          </ul>

          <button type="button" className="random">
            Surprise Me
            <span>✦</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
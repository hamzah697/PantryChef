import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
       
        <div className="footer-brand">
          <h2>PantryChef</h2>
          <p className="footer-tagline">Cook with what you have.</p>

          <p className="footer-description">
            Simple ingredients. Great meals.
            <br />
            Less waste. More flavour.
          </p>
        </div>

    
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#favorites">Favorites</a>
          <a href="#about">About</a>
        </div>


        <div className="footer-column">
          <h3>Project</h3>

          <a
            href="https://github.com/hamzah697/PantryChef.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:m.hamzahamin19@gmail.com">Contact</a>

          <p className="footer-quote">
            Good food brings
            <br />
            people together.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PantryChef. All rights reserved.</p>

        <p>
          Built with <span>♥</span> for food lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import "../styles/Footer.css";

const Footer = () => (
   <footer className="footer">
      <div className="footer-content">
         <div className="footer-logo">ClosedMonday</div>
         <div>
            <p>About Us</p>
            <p>Careers</p>
         </div>
         <div className="footer-contact">
            <p>Email: contact@closedmonday.media</p>
            <p>Phone: +123 456 7890</p>
            <p className="copyright">
               © 2023 Closed Monday. All rights reserved.
            </p>
         </div>
         <div className="footer-icons">
            <a
               href="https://facebook.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-facebook-f"></i>
            </a>
            <a
               href="https://twitter.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-twitter"></i>
            </a>
            <a
               href="https://instagram.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-instagram"></i>
            </a>
            <a
               href="https://linkedin.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className="fab fa-linkedin-in"></i>
            </a>
         </div>
      </div>
   </footer>
);

export default Footer;

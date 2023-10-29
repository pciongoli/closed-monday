// src/pages/ServicesPage.js
import React from "react";
import "../styles/ServicesPage.css";

const ServicesPage = () => (
   <div className="services">
      <h1>Our Services</h1>
      <div>
         <div className="service-item">
            <div className="icon">
               <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
                  alt="Full podcast production"
               />
            </div>
            <div className="service-content">
               <h2>Full podcast production</h2>
               <p>
                  High-quality full podcast production to cater to your specific
                  needs.
               </p>
               <p className="price">Starting at $XXX</p>
            </div>
         </div>

         <div className="service-item">
            <div className="icon">
               <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
                  alt="Short form clips"
               />
            </div>
            <div className="service-content">
               <h2>Short form clips</h2>
               <p>Engaging short form clips tailored for your audience.</p>
               <p className="price">Starting at $XXX</p>
            </div>
         </div>

         <div className="service-item">
            <div className="icon">
               <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
                  alt="Long form"
               />
            </div>
            <div className="service-content">
               <h2>Long form</h2>
               <p>Detailed long form content to dive deep into topics.</p>
               <p className="price">Starting at $XXX</p>
            </div>
         </div>

         <div className="service-item">
            <div className="icon">
               <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
                  alt="Audio"
               />
            </div>
            <div className="service-content">
               <h2>Audio</h2>
               <p>Crystal clear audio services for a range of needs.</p>
               <p className="price">Starting at $XXX</p>
            </div>
         </div>

         <div className="service-item">
            <div className="icon">
               <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
                  alt="Project management"
               />
            </div>
            <div className="service-content">
               <h2>Project management</h2>
               <p>Efficient project management to ensure timely deliveries.</p>
               <p className="price">Starting at $XXX</p>
            </div>
         </div>

         <div className="service-item">
            <div className="icon">
               <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
                  alt="TikTok video editing"
               />
            </div>
            <div className="service-content">
               <h2>TikTok video editing</h2>
               <p>Trendy TikTok video edits to boost your online presence.</p>
               <p className="price">Starting at $XXX</p>
            </div>
         </div>
      </div>
   </div>
);

export default ServicesPage;

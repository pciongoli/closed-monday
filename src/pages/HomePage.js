import React from "react";
import heroImage from "../assets/image/hero-image.png";
import "../styles/HomePage.css";

const HomePage = () => (
   <div className="home">
      <div className="hero">
         <img src={heroImage} alt="Hero Image" className="hero-image" />

         <div className="action-buttons">
            <button onClick={() => (window.location.href = "/contact")}>
               Get in Contact with Us
            </button>
            <button onClick={() => (window.location.href = "/portfolio")}>
               See some of our work!{" "}
            </button>
         </div>
      </div>

      <h2 className="introduction">
         Your destination for high-quality video editing. From short clips to
         full-length productions, we bring your vision to life.
      </h2>
      <div className="clients-section">
         <h2>Our Collaborators</h2>
         <div className="widgets-container">
            <div className="spotify-widget">
               <h3>JOHNNY DRINKS</h3>
               <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/7xuYMlfFAXUfReoHKGHjb6?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
            <div className="spotify-widget">
               <h3>UNDER THE INFLUENCE</h3>
               <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/5NDVTKGjiZhrth5hJbfvsA/video?utm_source=generator"
                  width="624"
                  height="351"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
            <div className="spotify-widget">
               <h3>SUBURB TALKS</h3>
               <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/4YLbUxILwRNN9e1UUCDV1D?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
         </div>
      </div>

      <div className="services-overview">
         <h2>Services We Offer</h2>

         <div className="services-container">
            <div className="services-list">
               <ul>
                  <li>Full podcast production</li>
                  <li>Short form clips</li>
                  <li>Long form</li>
                  <li>Audio</li>
                  <li>Project management</li>
                  <li>TikTok video editing</li>
               </ul>
            </div>

            <button
               className="explore-services-btn"
               onClick={() => (window.location.href = "/services")}
            >
               Explore All Our Exciting Services!
            </button>
         </div>
      </div>

      <div className="testimonials">
         <h2>What Our Clients Say</h2>

         <div className="testimonial-container">
            <div className="avatar"></div>
            <p>
               "Closed On Mondays provided exceptional editing services for our
               corporate videos. Highly recommended!"
               <br />- John Doe, CEO of ABC Corp
            </p>
         </div>
         <div className="testimonial-container">
            <div className="avatar"></div>
            <p>
               "The attention to detail and creativity brought our documentary
               to life. Can't wait for our next project!"
               <br />- Jane Smith, Documentary Producer
            </p>
         </div>
      </div>
   </div>
);

export default HomePage;

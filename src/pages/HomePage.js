import React from "react";
import heroVideo from "../assets/video/hero-video.mp4"; // Update the import path as necessary
import videoEditorImage from "../assets/image/video-editor-img2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css";

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
};

const HomePage = () => (
   <div className="home">
      <div className="hero">
         {/* Replace img tag with video tag */}
         <video className="hero-video" autoPlay loop muted>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
         <div className="action-buttons">
            <button onClick={() => (window.location.href = "/contact")}>
               Get in Contact with Us
            </button>
            <button onClick={() => (window.location.href = "/portfolio")}>
               See some of our work!
            </button>
         </div>
      </div>
      <div className="clients-section">
         <h2>Our Collaborators</h2>
         <div className="widgets-container">
            <div className="spotify-widget">
               <h3>JOHNNY DRINKS</h3>
               <iframe
                  title="Spotify Widget - JOHNNY DRINKS"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/7xuYMlfFAXUfReoHKGHjb6?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
            <div className="spotify-widget">
               <h3>UNDER THE INFLUENCE</h3>
               <iframe
                  title="Spotify Widget - UNDER THE INFLUENCE"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/5NDVTKGjiZhrth5hJbfvsA/video?utm_source=generator"
                  width="624"
                  height="351"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
               ></iframe>
            </div>
            <div className="spotify-widget">
               <h3>SUBURB TALKS</h3>
               <iframe
                  title="Spotify Widget - SUBURB TALKS"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/4YLbUxILwRNN9e1UUCDV1D?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen=""
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
      <div className="short-videos-section">
         <h2>Short Videos & TikToks</h2>
         <div className="video-container">
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/bTi_OD9R1ZE"
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/tN6iz9P6A3c"
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/okyYbCBIwFo"
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
            <iframe
               width="315"
               height="560"
               src="https://www.youtube.com/embed/fPMvyeEZ9Hc"
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
         </div>
      </div>
      <div className="contact-section">
         <div className="contact-text">Text us anytime at 200-CLOSEDMO</div>
         <div className="contact-info">
            <p>Got a project in mind?</p>
            <p>Let's talk and turn your vision into reality.</p>
            <p>Reach out to us and get your quote today!</p>
         </div>
         <img
            src={videoEditorImage}
            alt="Video Editor"
            className="editor-image"
         />
      </div>
      <div className="testimonials">
         <h2>What Our Clients Say</h2>
         <Slider {...settings}>
            <div className="testimonial-container">
               <div className="avatar"></div>
               <div class="testimonial-text">
                  <p>
                     "Closed On Mondays provided exceptional editing services
                     for our corporate videos. Highly recommended!"
                  </p>
               </div>
               <div class="testimonial-author">- John Doe, CEO of ABC Corp</div>
            </div>
            <div className="testimonial-container">
               <div className="avatar"></div>
               <div class="testimonial-text">
                  <p>
                     "The attention to detail and creativity brought our
                     documentary to life. Can't wait for our next project!"
                  </p>
               </div>
               <div class="testimonial-author">
                  - Jane Smith, Documentary Producer
               </div>
            </div>
            <div className="testimonial-container">
               <div className="avatar"></div>
               <div class="testimonial-text">
                  <p>
                     "Their quick turnaround and innovative approach made a huge
                     impact on our marketing campaign."
                  </p>
               </div>
               <div class="testimonial-author">
                  - Michael Lee, Marketing Director
               </div>
            </div>
         </Slider>
      </div>
   </div>
);

export default HomePage;

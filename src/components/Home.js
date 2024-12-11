import React from 'react';
import Image1 from '../images/Image1.png';
import Image3 from '../images/Image3.png';
import Image4 from '../images/Image4.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Rescue Plate</h1>
        <p>
          Join us in our mission to reduce food waste and improve food security. 
          By donating surplus food, requesting donations, and analyzing data, we can make a significant difference in our communities.
        </p>
        <p>
          Our platform connects food donors with organizations in need, ensuring that no edible food goes to waste. Together, we can create a sustainable future by sharing resources and supporting those who are less fortunate.
        </p>

        <h2>How It Works</h2>
        <ol>
          <li><strong>Donate Food:</strong> List your surplus food items and connect with local organizations.</li>
          <li><strong>Request Food:</strong> Organizations can request food donations based on their needs.</li>
          <li><strong>Analyze Data:</strong> Use our analytics tools to track food waste trends and improve efficiency.</li>
        </ol>

        <div className="quote-container">
          <h2>Inspiring Quotes on Food Security</h2>
          <div className="quote-card">
            <blockquote>"Food security is a human right, not a privilege reserved for a few."</blockquote>
          </div>
          <div className="quote-card">
            <blockquote>"When we feed the hungry, we're feeding their dreams, their potential, and the future of our world."</blockquote>
          </div>
          <div className="quote-card">
            <blockquote>"Every meal shared is an act of solidarity, a reaffirmation of our shared humanity."</blockquote>
          </div>
          <div className="quote-card">
            <blockquote>"Food security is the heartbeat of a sustainable world; it beats for both the present and the future."</blockquote>
          </div>
        </div>

        <h2>Our Impact</h2>
        <div className="image-gallery">
          <img src={Image1} alt="Delicious food 1" className="food-image" />
          <img src={Image3} alt="Delicious food 2" className="food-image" />
          <img src={Image4} alt="Delicious food 3" className="food-image" />
        </div>

        <div className="button-container">
          <a href="/fooddonor" className="button">Become a Food Donor</a>
          <a href="/recipientorganization" className="button">Request Food Donation</a>
          <a href="/dataanalyst" className="button">View Data Insights</a>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start; /* Align items at the start */
          min-height: 100vh; /* Ensure it covers full viewport height */
          background: url(${Image4}) no-repeat center center; /* Use imported image */
          background-size: cover; /* Cover the entire container */
          width: 100vw;
          position: relative; /* Position relative for overlay */
        }

        .overlay {
          position: absolute; /* Position overlay over the background */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better contrast */
          backdrop-filter: blur(5px); /* Blur effect */
          z-index: 1; /* Ensure overlay is above the background */
        }

        .content {
          position: relative; /* Position content above the overlay */
          z-index: 2; /* Ensure content is above the overlay */
          text-align: center; /* Center text alignment */
          padding: 20px;
          max-width: 800px; /* Limit content width for better readability */
          color: white; /* Change text color to white for better contrast */
        }

        h1 {
          color: #FFDD44; /* Bright yellow color for the heading */
          font-size: 2.5rem; /* Font size for the heading */
          margin-bottom: 20px; /* Space below the heading */
        }

        h2 {
          color: #FFDD44; /* Bright yellow color for subheading */
          font-size: 2rem; /* Font size for subheading */
          margin-top: 30px; /* Space above subheading */
        }

        p {
          color: #ffffff; /* White color for paragraph text */
          font-size: 1.2rem; /* Font size for the paragraph */
          margin-bottom: 20px; /* Space below the paragraph */
        }

        ol {
          text-align: left; /* Align ordered list to left for better readability */
          margin-bottom: 30px; /* Space below list */
        }

        .quote-container {
          margin-top: 30px; /* Space above quotes section */
           padding: 15px;
           background-color: rgba(255,255,255,0.1); /* Light background for quotes */
           border-radius: 10px; /* Rounded corners for quotes container */
           max-width: 800px; /* Limit width to match content area */
           margin-left:auto;
           margin-right:auto;
           text-align:left;
         }

         .quote-card {
           padding: 10px;
           border-left: 4px solid #FFDD44; /* Highlight left border with yellow color */
           margin-bottom: 10px;
         }

         blockquote {
           font-style: italic;
           color: #FFDD44; /* Bright yellow color for quotes */
           margin-bottom: 5px; /* Space below each quote */
         }

         .image-gallery {
           display: grid; /* Use grid layout for images */
           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive columns */
           gap: 15px; /* Space between images */
           margin-bottom: 30px; /* Space below the image gallery */
         }

         .food-image {
           width: 100%; /* Set image to fill container width */
           height: auto; /* Maintain aspect ratio */
           border-radius: 10px; /* Rounded corners for images */
           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Shadow effect for images */
         }

         .button-container {
           display: flex;
           flex-direction: column;
           gap: 15px; /* Space between buttons */
         }

         .button {
           padding: 15px 30px; /* Padding inside buttons */
           background-color: #FFDD44; /* Bright yellow background color for buttons */
           color: #333; /* Darker text color for buttons for contrast */
           text-decoration: none; /* No underline for links */
           border-radius: 5px; /* Rounded corners for buttons */
           transition: background-color 0.3s; /* Transition effect for hover */
         }

         .button:hover {
           background-color: #FFD700; /* Slightly darker yellow on hover */
         }
      `}</style>
    </div>
  );
};

export default Home;
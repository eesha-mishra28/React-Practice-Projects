import React from "react";
import Cards from "./Cards.jsx";

const Service = () => {
  // Page container styles
  const pageContainerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fdfefe",
    color: "#2c3e50",
    minHeight: "80vh",
  };

  // Hero header banner matching the style of your About page
  const serviceHeaderStyle = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    textAlign: "center",
    padding: "60px 20px",
    borderBottom: "5px solid #e67e22",
  };

  // Wrapper that controls the width and centers the content
  const contentWrapperStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 20px",
  };

  // Responsive flex grid layout for your cards
  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
    marginTop: "20px",
  };

  return (
    <div style={pageContainerStyle}>
      {/* Top Banner */}
      <div style={serviceHeaderStyle}>
        <h1
          style={{
            fontSize: "3rem",
            margin: "0 0 10px 0",
            letterSpacing: "1px",
          }}
        >
          Our Services & Amenities
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#a0a0a0", margin: "0" }}>
          Discover how we craft unforgettable dining experiences for you.
        </p>
      </div>

      {/* Cards Section */}
      <div style={contentWrapperStyle}>
        <div style={gridStyle}>
          {/* Each card will sit perfectly side-by-side on desktop and stack on mobile */}
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";

const Footer = () => {
  // Inline styles defined as JavaScript objects
  const footerStyle = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    textAlign: "center",
    padding: "25px 20px",
    position: "relative",
    bottom: "0",
    width: "100%",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: "3px solid #e67e22", // Matching orange accent from header
    boxSizing: "border-box",
  };

  const textStyle = {
    margin: "0",
    fontSize: "0.95rem",
    letterSpacing: "0.8px",
    color: "#a0a0a0",
  };

  const highlightStyle = {
    color: "#e67e22",
    fontWeight: "600",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        © {currentYear} <span style={highlightStyle}>HappyRestaurant</span>. All
        rights reserved.
      </p>
      <p
        style={{
          ...textStyle,
          fontSize: "0.8rem",
          marginTop: "8px",
          color: "#666",
        }}
      >
        {/* Fixed: Removed the undefined user_context check */}
        Designed by @eesha-mishra
      </p>
    </footer>
  );
};

export default Footer;

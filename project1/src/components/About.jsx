import React from "react";

const About = () => {
  // Styling Objects
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#2c3e50",
    lineHeight: "1.6",
    backgroundColor: "#fdfefe",
  };

  const heroSectionStyle = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    textAlign: "center",
    padding: "80px 20px",
    borderBottom: "5px solid #e67e22",
  };

  const contentSectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
    marginBottom: "60px",
  };

  const gridColumnStyle = {
    flex: "1 1 450px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#1a1a1a",
    borderBottom: "2px solid #e67e22",
    paddingBottom: "10px",
    marginBottom: "20px",
  };

  const highlightText = {
    color: "#e67e22",
    fontWeight: "bold",
  };

  const statsContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#f4f6f6",
    padding: "40px 20px",
    borderRadius: "8px",
    textAlign: "center",
    marginTop: "40px",
  };

  const statBoxStyle = {
    padding: "20px",
  };

  const statNumberStyle = {
    fontSize: "3rem",
    color: "#e67e22",
    fontWeight: "bold",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      {/* 1. Hero Header Section */}
      <section style={heroSectionStyle}>
        <h1 style={{ fontSize: "3.5rem", margin: "0 0 10px 0" }}>Our Story</h1>
        <p style={{ fontSize: "1.2rem", color: "#a0a0a0", margin: "0" }}>
          Crafting unforgettable culinary memories since 2015.
        </p>
      </section>

      {/* Main Content Area */}
      <div style={contentSectionStyle}>
        {/* 2. The Journey Section */}
        <section style={gridStyle}>
          <div style={gridColumnStyle}>
            <h2 style={headingStyle}>How We Started</h2>
            <p>
              Welcome to <span style={highlightText}>HappyRestaurant</span>,
              where passion meets the plate. Our journey began over a decade ago
              with a simple vision: to create a warm, inviting space where
              families and friends could gather to enjoy exceptionally crafted
              food made from the freshest local ingredients.
            </p>
            <p>
              What started as a small, intimate 10-table bistro has blossomed
              into a beloved community staple. Despite our growth, our core
              philosophy remains unchanged: treat every guest like family and
              every dish like a masterpiece.
            </p>
          </div>
          <div style={gridColumnStyle}>
            {/* If using public folder, place image at public/images/kitchen.jpg */}
            <img
              src="/images/kitchen.jpg"
              alt="Our Kitchen"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              onError={(e) => {
                e.target.src = "https://unsplash.com";
              }}
            />
          </div>
        </section>

        {/* 3. Our Philosophy Section */}
        <section style={{ ...gridStyle, flexDirection: "row-reverse" }}>
          <div style={gridColumnStyle}>
            <h2 style={headingStyle}>Our Culinary Philosophy</h2>
            <p>
              We believe that great food starts at the farm. That is why we
              partner closely with local growers, organic farmers, and
              sustainable fishermen to source only the highest quality,
              in-season ingredients.
            </p>
            <p>
              Our talented kitchen team blends traditional, time-honored cooking
              techniques with modern culinary creativity. Every sauce is
              simmered from scratch, every bread is baked fresh daily, and every
              plate is assembled with meticulous care.
            </p>
          </div>
          <div style={gridColumnStyle}>
            {/* If using public folder, place image at public/images/chef.jpg */}
            <img
              src="/images/chef.jpg"
              alt="Our Chef"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              onError={(e) => {
                e.target.src = "https://unsplash.com";
              }}
            />
          </div>
        </section>

        {/* 4. Statistics Ribbon */}
        <section style={statsContainerStyle}>
          <div style={statBoxStyle}>
            <p style={statNumberStyle}>10+</p>
            <p style={{ margin: "5px 0 0 0", fontWeight: "600" }}>
              Years of Excellence
            </p>
          </div>
          <div style={statBoxStyle}>
            <p style={statNumberStyle}>50k+</p>
            <p style={{ margin: "5px 0 0 0", fontWeight: "600" }}>
              Happy Customers
            </p>
          </div>
          <div style={statBoxStyle}>
            <p style={statNumberStyle}>35+</p>
            <p style={{ margin: "5px 0 0 0", fontWeight: "600" }}>
              Unique Dishes
            </p>
          </div>
          <div style={statBoxStyle}>
            <p style={statNumberStyle}>12</p>
            <p style={{ margin: "5px 0 0 0", fontWeight: "600" }}>
              Local Farm Partners
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Home = () => {
  // Global page style
  const homeContainerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#2c3e50",
    backgroundColor: "#ffffff",
    overflowX: "hidden",
  };

  // 1. Hero Banner Style
  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://unsplash.com')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
    textAlign: "center",
    padding: "120px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const ctaButtonStyle = {
    backgroundColor: "#e67e22",
    color: "#ffffff",
    border: "none",
    padding: "14px 30px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "25px",
    cursor: "pointer",
    marginTop: "25px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(230, 126, 34, 0.4)",
  };

  // 2. Feature Section Style
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 20px",
    textAlign: "center",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
    marginTop: "40px",
  };

  // 3. Mini Food Item Card Style
  const foodCardStyle = {
    flex: "1 1 280px",
    maxWidth: "350px",
    backgroundColor: "#fcfcfc",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    border: "1px solid #f0f0f0",
  };

  return (
    <div style={homeContainerStyle}>
      {/* SECTION 1: HERO CONTAINER */}
      <header style={heroStyle}>
        <h1
          style={{
            fontSize: "3.8rem",
            margin: "0 0 15px 0",
            fontWeight: "800",
            letterSpacing: "1px",
          }}
        >
          Flavours That Make You <span style={{ color: "#e67e22" }}>Happy</span>
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "#f0f0f0",
            maxWwidth: "600px",
            margin: "0",
          }}
        >
          Experience masterfully crafted dishes made with organic local farm
          ingredients.
        </p>
        <button style={ctaButtonStyle}>Explore Our Menu</button>
      </header>

      {/* SECTION 2: WHY CHOOSE US BRIEF */}
      <section style={sectionStyle}>
        <h2
          style={{ fontSize: "2.2rem", color: "#1a1a1a", margin: "0 0 10px 0" }}
        >
          Why Dine With Us?
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#e67e22",
            margin: "0 auto 30px auto",
          }}
        ></div>

        <div style={gridStyle}>
          <div style={{ flex: "1 1 250px", padding: "15px" }}>
            <span style={{ fontSize: "2.5rem" }}>🍳</span>
            <h3 style={{ color: "#1a1a1a", margin: "10px 0" }}>
              Fresh Ingredients
            </h3>
            <p
              style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.5" }}
            >
              Sourced straight from local farms and sustainable fisheries every
              single morning.
            </p>
          </div>
          <div style={{ flex: "1 1 250px", padding: "15px" }}>
            <span style={{ fontSize: "2.5rem" }}>👨‍🍳</span>
            <h3 style={{ color: "#1a1a1a", margin: "10px 0" }}>Expert Chefs</h3>
            <p
              style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.5" }}
            >
              Crafted by culinary artists passionate about unexpected flavour
              pairings.
            </p>
          </div>
          <div style={{ flex: "1 1 250px", padding: "15px" }}>
            <span style={{ fontSize: "2.5rem" }}>⭐</span>
            <h3 style={{ color: "#1a1a1a", margin: "10px 0" }}>
              Cosy Ambience
            </h3>
            <p
              style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.5" }}
            >
              A perfectly lit modern vintage aesthetic space designed for
              memory-making.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHEF'S SPECIAL FEATURE PREVIEW */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: "#fafafa",
          maxWidth: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              color: "#1a1a1a",
              margin: "0 0 40px 0",
            }}
          >
            Today's Highlights
          </h2>

          <div style={gridStyle}>
            {/* Food Preview 1 */}
            <div style={foodCardStyle}>
              <img
                src="https://unsplash.com"
                alt="Pizza"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px", textAlign: "left" }}>
                <h4 style={{ margin: "0 0 5px 0", fontSize: "1.2rem" }}>
                  Artisan Woodfired Pizza
                </h4>
                <p style={{ color: "#777", fontSize: "0.85rem", margin: "0" }}>
                  Fresh mozzarella, garden basil, and virgin olive oil drizzle.
                </p>
              </div>
            </div>

            {/* Food Preview 2 */}
            <div style={foodCardStyle}>
              <img
                src="https://unsplash.com"
                alt="Pancakes"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px", textAlign: "left" }}>
                <h4 style={{ margin: "0 0 5px 0", fontSize: "1.2rem" }}>
                  Signature Berry Stack
                </h4>
                <p style={{ color: "#777", fontSize: "0.85rem", margin: "0" }}>
                  Fluffy buttermilk stacks topped with maple reduction sauce.
                </p>
              </div>
            </div>

            {/* Food Preview 3 */}
            <div style={foodCardStyle}>
              <img
                src="https://unsplash.com"
                alt="Ribs"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px", textAlign: "left" }}>
                <h4 style={{ margin: "0 0 5px 0", fontSize: "1.2rem" }}>
                  Smoked Honey BBQ Ribs
                </h4>
                <p style={{ color: "#777", fontSize: "0.85rem", margin: "0" }}>
                  Slow cooked tender prime meat glazed in house secret spices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

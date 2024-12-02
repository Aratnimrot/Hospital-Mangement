// import React from "react";
import homeImage from "./assets/hms.jpeg";

function Home() {
  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <img src={homeImage} alt="Homepage" style={imageStyle} />
        <div style={textContainerStyle}>
          <h1 style={headingStyle}>Welcome to Our Homepage</h1>
          <p style={descriptionStyle}>
            Discover our latest updates and offerings. We bring you the best in
            quality, service, and innovation. Stay tuned for more exciting news
            and events!
          </p>
          <button style={buttonStyle}>Learn More</button>
        </div>
      </header>
    </div>
  );
}

// Styles
const headerStyle = {
  textAlign: "center",
  padding: "50px 0",
  backgroundColor: "#f4f4f9",
  borderRadius: "8px",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "60%",
  height: "auto",
  objectFit: "cover",
  marginLeft: "20%",
  marginTop: "10%",
  borderRadius: "8px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
};

const textContainerStyle = {
  padding: "20px",
  marginTop: "20px",
};

const headingStyle = {
  fontSize: "36px",
  color: "#333",
  fontWeight: "bold",
  marginBottom: "15px",
};

const descriptionStyle = {
  fontSize: "18px",
  color: "#666",
  maxWidth: "600px",
  margin: "0 auto 30px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  padding: "12px 30px",
  fontSize: "18px",
  cursor: "pointer",
  borderRadius: "5px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

export default Home;

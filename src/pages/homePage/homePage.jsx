import React from "react";
import "../../styles/homePage.css";

function HomePage() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="search-bar">Search Bar</div>
        <div className="login-button">Login</div>
      </header>
      <div className="main-content">
        <div className="message-list">Message List</div>
        <div className="contact-list">Contact List</div>
      </div>
      <footer className="footer">
        <div className="copyright">© 2024 Zalo</div>
      </footer>
    </div>
  );
}

export default HomePage;

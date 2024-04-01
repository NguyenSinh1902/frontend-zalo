import React from 'react';
import '../../styles/homePage.css'; // File CSS để tùy chỉnh giao diện

function HomePage() {
  return (
    <div className="app">
      <header className="header">
        {/* Phần header, có thể chứa logo, nút đăng nhập, tìm kiếm, vv. */}
        <div className="logo">Logo</div>
        <div className="search-bar">Search Bar</div>
        <div className="login-button">Login</div>
      </header>
      <div className="main-content">
        {/* Nội dung chính của trang, có thể là danh sách tin nhắn, danh bạ, vv. */}
        <div className="message-list">Message List</div>
        <div className="contact-list">Contact List</div>
      </div>
      <footer className="footer">
        {/* Phần footer, có thể chứa thông tin về trang, liên kết, vv. */}
        <div className="copyright">© 2024 Zalo</div>
      </footer>
    </div>
  );
}

export default HomePage;

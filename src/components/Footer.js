import React from 'react';
import './Footer.css'; // เพิ่มการเชื่อมโยงไฟล์ CSS

const Footer = () => {
  return (
    <footer>
      <div className="container text-center py-4">
        <p className="mb-2">ร้านบุฟเฟต์ก๋วยเตี๋ยว</p>
        <p className="mb-2">ที่อยู่: ถนนสาธารณะ 123, กรุงเทพมหานคร, ไทย</p>
        <p className="mb-2">โทรศัพท์: 012-345-6789</p>
        <div className="social-links mt-3">
          <a href="https://www.facebook.com/" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="https://line.me/" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-line"></i> Line
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-white">© 2025 ร้านบุฟเฟต์ก๋วยเตี๋ยว. สงวนลิขสิทธิ์.</p>
      </div>
    </footer>
  );
};

export default Footer;

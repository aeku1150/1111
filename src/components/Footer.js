import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-danger text-white text-center py-4" style={{ backgroundColor: '#FF5733' }}>
      <div className="container">
        <p className="mb-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>ร้านบุฟเฟต์ก๋วยเตี๋ยว</p>
        <p className="mb-2" style={{ fontSize: '14px' }}>ที่อยู่: ถนนสาธารณะ 123, กรุงเทพมหานคร, ไทย</p>
        <p className="mb-2" style={{ fontSize: '14px' }}>โทรศัพท์: 012-345-6789</p>
        <div className="social-links mt-3">
          <a href="https://www.facebook.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}>
            <i className="bi bi-facebook" style={{ marginRight: '8px' }}></i> Facebook
          </a>
          <a href="https://line.me/" className="text-white me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}>
            <i className="bi bi-line" style={{ marginRight: '8px' }}></i> Line
          </a>
          <a href="https://www.instagram.com/" className="text-white" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}>
            <i className="bi bi-instagram" style={{ marginRight: '8px' }}></i> Instagram
          </a>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white" style={{ fontSize: '12px' }}>© 2025 ร้านบุฟเฟต์ก๋วยเตี๋ยว. สงวนลิขสิทธิ์.</p>
      </div>
    </footer>
  );
};

export default Footer;

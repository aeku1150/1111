import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // เพิ่มการเชื่อมโยงไฟล์ CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          ร้านบุฟเฟต์ก๋วยเตี๋ยว
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onMouseOver={(e) => e.target.style.color = '#f39c12'} onMouseOut={(e) => e.target.style.color = 'white'}>
                หน้าหลัก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu" onMouseOver={(e) => e.target.style.color = '#f39c12'} onMouseOut={(e) => e.target.style.color = 'white'}>
                เมนู
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout" onMouseOver={(e) => e.target.style.color = '#f39c12'} onMouseOut={(e) => e.target.style.color = 'white'}>
                ออกจากระบบ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

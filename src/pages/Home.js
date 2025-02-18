import React from "react";
import "./Home.css"; // สำหรับใส่สไตล์ CSS
import logo1 from "../img/logo1.jpg"; // รูปในส่วน Header
import img1 from "../img/noodle-beef.jpg"; // ก๋วยเตี๋ยวเนื้อ
import img2 from "../img/noodle-pork.jpg"; // ก๋วยเตี๋ยวหมู
import noodleTomYum from "../img/noodle-tomyum.jpg"; // ก๋วยเตี๋ยวต้มยำ
import review1 from "../img/11.jpg"; // รีวิวลูกค้า 1
import review2 from "../img/22.jpg"; // รีวิวลูกค้า 2

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <img
          className="header-image"
          src={logo1} // เพิ่มรูปในส่วน Header
          alt="ร้านบุฟเฟต์ก๋วยเตี๋ยว"
        />
        <h1>ร้านบุฟเฟต์ก๋วยเตี๋ยวสุดฟิน!</h1>
        <p>กินไม่อั้นในราคาที่คุณต้องประทับใจ</p>
      </header>

      <section className="about-section">
        <h2>เกี่ยวกับร้าน</h2>
        <p>
          ร้านของเรามีบริการบุฟเฟต์ก๋วยเตี๋ยวที่คุณสามารถเลือกเติมได้ตามใจชอบ
          ทั้งก๋วยเตี๋ยวเนื้อ-หมู, ต้มยำ, และซุปต่างๆ พร้อมเครื่องเคียง
          มากมาย ไม่ว่าจะเป็นไข่, ทะเล, หรือเนื้อสัตว์หลากหลาย
        </p>
      </section>

      <section className="menu-section">
        <h2>เมนูแนะนำ</h2>
        
        <div className="menu">
          <div className="menu-item">
            <img src={img1} alt="ก๋วยเตี๋ยวเนื้อ" />
            <h3>ก๋วยเตี๋ยวเนื้อ</h3>
            <p>เนื้อคุณภาพดีในน้ำซุปเข้มข้น</p>
          </div>
          <div className="menu-item">
            <img src={img2} alt="ก๋วยเตี๋ยวหมู" />
            <h3>ก๋วยเตี๋ยวหมู</h3>
            <p>หมูนุ่มๆ ใส่ในน้ำซุปต้มยำรสเด็ด</p>
          </div>
          <div className="menu-item">
            <img src={noodleTomYum} alt="ก๋วยเตี๋ยวต้มยำ" />
            <h3>ก๋วยเตี๋ยวต้มยำ</h3>
            <p>รสจัดจ้าน หอมเครื่องต้มยำ</p>
          </div>
        </div>
      </section>
      

      <section className="location-section">
        <h2>ที่ตั้งของร้าน</h2>
        <div className="map-container">
          {/* ใส่แผนที่หรือข้อมูล Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="reviews-section">
        <h2>รีวิวจากลูกค้า</h2>
        <div className="review">
          <img
            className="review-image"
            src={review1} // รูปรีวิวจากลูกค้า 1
            alt="รีวิวจากลูกค้า 1"
          />
          <p>"อร่อยมาก ก๋วยเตี๋ยวเนื้อมีรสชาติกลมกล่อม เหมาะสำหรับคนรักการกินจริงๆ!" - คุณสมชาย</p>
        </div>
        <div className="review">
          <img
            className="review-image"
            src={review2} // รูปรีวิวจากลูกค้า 2
            alt="รีวิวจากลูกค้า 2"
          />
          <p>"บริการดีมาก เจ้าของร้านใส่ใจลูกค้า และบรรยากาศก็สบายๆ ค่ะ" - คุณพลอย</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

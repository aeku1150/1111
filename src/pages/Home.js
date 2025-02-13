import React from 'react';
import Slider from 'react-slick';
import logo1 from '../img/logo1.jpg';
import logo2 from '../img/logo2.jpg';
import logo3 from '../img/logo3.jpg';
import reviewImage1 from '../img/01.jpg';
import reviewImage2 from '../img/02.jpg';
import reviewImage3 from '../img/03.jpg';
import './Home.css';  // นำเข้าไฟล์ CSS ที่นี่

// การตั้งค่า Slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Home = () => {
  return (
    <div>
      <div className="carousel-container my-5">
        {/* โลโก้ร้านและพื้นหลัง */}
        <div className="bg-image d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/img/logo-or-background.jpg)' }}>
          <h1 className="text-white text-center text-shadow">ร้านบุฟเฟต์ก๋วยเตี๋ยว</h1>
        </div>

        {/* รูปโรว์ที่เลื่อนได้อัตโนมัติ */}
        <Slider {...settings}>
          <div>
            <img src={logo1} className="d-block w-100" alt="carousel-1" />
          </div>
          <div>
            <img src={logo2} className="d-block w-100" alt="carousel-2" />
          </div>
          <div>
            <img src={logo3} className="d-block w-100" alt="carousel-3" />
          </div>
        </Slider>
      </div>

      {/* แนะนำร้าน */}
      <div className="restaurant-intro my-5 text-center">
        <h2>แนะนำร้านของเรา</h2>
        <p>ร้านบุฟเฟต์ก๋วยเตี๋ยวของเรามีเมนูหลากหลายให้เลือก อิ่มอร่อยกับก๋วยเตี๋ยวที่ทำสดใหม่ทุกวัน พร้อมทั้งบริการที่อบอุ่นและบรรยากาศที่น่ารื่นรมย์</p>
        <p>มาร่วมสัมผัสประสบการณ์การทานอาหารที่ไม่เหมือนใครกันเถอะ!</p>
      </div>

      {/* รีวิวจากลูกค้า */}
      <div className="reviews-section my-5">
        <h2 className="text-center mb-4">รีวิวจากลูกค้า</h2>
        <div className="reviews-slider">
          <Slider {...settings}>
            <div className="review-card">
              <img src={reviewImage1} className="card-img-top" alt="review1" />
              <div className="card-body">
                <h5 className="card-title">ลูกค้า 1</h5>
                <p className="card-text">"ก๋วยเตี๋ยวอร่อยมาก! บริการดีเยี่ยมและบรรยากาศดีมากครับ"</p>
              </div>
            </div>
            <div className="review-card">
              <img src={reviewImage2} className="card-img-top" alt="review2" />
              <div className="card-body">
                <h5 className="card-title">ลูกค้า 2</h5>
                <p className="card-text">"ราคาถูกและคุ้มค่ามาก อิ่มท้องคุ้มราคาจริงๆ"</p>
              </div>
            </div>
            <div className="review-card">
              <img src={reviewImage3} className="card-img-top" alt="review3" />
              <div className="card-body">
                <h5 className="card-title">ลูกค้า 3</h5>
                <p className="card-text">"ร้านนี้มีเมนูหลากหลายและมีความสดใหม่ อร่อยมากๆ ครับ"</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;

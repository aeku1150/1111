import React from 'react';
import './FoodList.css';  // เพิ่มไฟล์ CSS สำหรับการสไตล์

const Foodlist = ({ order, onClose, onConfirm }) => {
  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleConfirm = () => {
    onConfirm(); // เรียกใช้ฟังก์ชันที่ส่งมาเมื่อกดยืนยัน
    alert('เราได้รับรายการอาหารแล้ว กรุณารอสักครู่ ขอบคุณที่ให้บริการค่ะ');
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>รายการอาหารที่สั่ง</h2>
        <ul className="order-list">
          {order.map((item) => (
            <li key={item.id} className="order-item">
              <img src={item.img} alt={item.name} className="order-item-img" />
              <div className="order-item-details">
                <p className="order-item-name">{item.name} x {item.quantity}</p>
                <p className="order-item-price">{item.price * item.quantity} บาท</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">ราคารวม: {totalPrice} บาท</p>
        <div className="popup-buttons">
          <button onClick={handleConfirm} className="confirm-btn">ยืนยันการสั่งอาหาร</button>
          <button onClick={onClose} className="close-btn">ปิด</button>
        </div>
      </div>
    </div>
  );
};

export default Foodlist;

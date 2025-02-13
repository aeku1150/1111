import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa'; // ใช้ไอคอนจานอาหารจาก react-icons
import logo1 from '../img/1.jpg';
import logo2 from '../img/2.jpg';
import logo3 from '../img/3.jpg';
import logo4 from '../img/4.jpg';
import logo5 from '../img/5.jpg';
import logo6 from '../img/6.jpg';
import logo7 from '../img/7.jpg';

const Menu = () => {
  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState('');

  // ข้อมูลเมนู
  const menuItems = [
    { id: 1, name: 'ก๋วยเตี๋ยวไก่ตุ๋นมะระ', price: '55 บาท', img: logo1 },
    { id: 2, name: 'ก๋วยเตี๋ยวผัดแห้ง', price: '60 บาท', img: logo2 },
    { id: 3, name: 'ก๋วยเตี๋ยวไก่ฉีก สูตรคลีน', price: '60 บาท', img: logo3 },
    { id: 4, name: 'ก๋วยเตี๋ยวเรือ', price: '45 บาท', img: logo4 },
    { id: 5, name: 'ก๋วยเตี๋ยวหลอดทรงเครื่อง', price: '50 บาท', img: logo5 },
    { id: 6, name: 'ก๋วยเตี๋ยวหมูเด้ง', price: '55 บาท', img: logo6 },
    { id: 7, name: 'ก๋วยเตี๋ยวเป็ด', price: '65 บาท', img: logo7 },
  ];

  // ฟังก์ชันเพิ่มเมนูในตะกร้า
  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  // ฟังก์ชันลบเมนูจากตะกร้า
  const removeFromOrder = (id) => {
    setOrder(order.filter(item => item.id !== id));
  };

  // ฟังก์ชันสำหรับการสั่งอาหาร
  const placeOrder = () => {
    setMessage('กรุณารออาหารซักครู่ ขอบคุณที่ใช้บริการ');
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p className="price">{item.price}</p>
            <button className="order-btn" onClick={() => addToOrder(item)}>
              <FaUtensils /> สั่งอาหาร
            </button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>รายการที่สั่ง</h3>
        <div className="order-list">
          {order.length > 0 ? (
            order.map(item => (
              <div key={item.id} className="order-item">
                <p>{item.name} - {item.price}</p>
                <button onClick={() => removeFromOrder(item.id)} className="remove-btn">ลบ</button>
              </div>
            ))
          ) : (
            <p>ยังไม่มีรายการที่สั่ง</p>
          )}
        </div>

        {order.length > 0 && (
          <button className="place-order-btn" onClick={placeOrder}>ยืนยันการสั่งอาหาร</button>
        )}

        {message && <p className="order-message">{message}</p>}
      </div>

      <style>
        {`
          .menu-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            min-height: 100vh;
          }

          .menu-items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
            margin-bottom: 30px;
            max-width: 1200px;
            width: 100%;
          }

          .menu-item {
            background: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            width: 250px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .menu-item:hover {
            transform: translateY(-5px);
          }

          .menu-item img {
            width: 100%;
            border-radius: 10px;
          }

          .price {
            font-size: 18px;
            font-weight: bold;
            color: #d32f2f;
            margin: 10px 0;
          }

          .order-btn {
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .order-summary {
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            margin-top: 30px;
            text-align: center;
          }

          .order-list {
            max-height: 200px;
            overflow-y: auto;
            margin-bottom: 20px;
          }

          .order-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 10px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }

          .remove-btn {
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;
          }

          .place-order-btn {
            background-color: #1976d2;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
            margin-top: 10px;
          }

          .order-message {
            margin-top: 20px;
            color: green;
            font-size: 18px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .menu-item {
              width: 45%;
            }

            .order-summary {
              width: 90%;
            }
          }

          @media (max-width: 480px) {
            .menu-item {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;

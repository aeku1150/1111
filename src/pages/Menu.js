import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import './Menu.css';
import Foodlist from './FoodList.js'; // ปรับเส้นทางให้ตรงกับที่เก็บไฟล์
import logo1 from '../img/1.jpg';
import logo2 from '../img/2.jpg';
import logo3 from '../img/3.jpg';
import logo4 from '../img/4.jpg';
import logo5 from '../img/5.jpg';
import logo6 from '../img/6.jpg';
import logo7 from '../img/7.jpg';

const Menu = () => {
  const [order, setOrder] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState('');

  const menuItems = [
    { id: 1, name: 'ก๋วยเตี๋ยวไก่ตุ๋นมะระ', price: 55, img: logo1 },
    { id: 2, name: 'ก๋วยเตี๋ยวผัดแห้ง', price: 60, img: logo2 },
    { id: 3, name: 'ก๋วยเตี๋ยวไก่ฉีก สูตรคลีน', price: 60, img: logo3 },
    { id: 4, name: 'ก๋วยเตี๋ยวเรือ', price: 45, img: logo4 },
    { id: 5, name: 'ก๋วยเตี๋ยวหลอดทรงเครื่อง', price: 50, img: logo5 },
    { id: 6, name: 'ก๋วยเตี๋ยวหมูเด้ง', price: 55, img: logo6 },
    { id: 7, name: 'ก๋วยเตี๋ยวเป็ด', price: 65, img: logo7 },
  ];

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((orderItem) => orderItem.id === item.id);
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const removeOneFromOrder = (id) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromOrder = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const placeOrder = () => {
    setMessage(`คุณสั่งอาหารรวมเป็นเงิน ${order.reduce((total, item) => total + item.price * item.quantity, 0)} บาท`);
    setIsPopupOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} className="menu-img" />
            <p className="menu-name">{item.name}</p>
            <p className="menu-price">{item.price} บาท</p>
            <button className="order-btn" onClick={() => addToOrder(item)}>
              <FaUtensils /> สั่งอาหาร
            </button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>รายการที่สั่ง</h3>
        {order.length > 0 ? (
          <div className="order-list">
            {order.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.img} alt={item.name} className="order-item-img" />
                <div className="order-item-details">
                  <p>{item.name} x {item.quantity}</p>
                  <p>{item.price * item.quantity} บาท</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromOrder(item.id)}>
                  ลบ
                </button>
              </div>
            ))}
            <p className="total-price">ราคารวม: {order.reduce((total, item) => total + item.price * item.quantity, 0)} บาท</p>
            <button className="place-order-btn" onClick={openPopup}>ยืนยันการสั่งอาหาร</button>
          </div>
        ) : (
          <p>ยังไม่มีรายการที่สั่ง</p>
        )}

        {message && <p className="order-message">{message}</p>}
      </div>

      {isPopupOpen && <Foodlist order={order} onClose={closePopup} onConfirm={placeOrder} />}
    </div>
  );
};

export default Menu;

import React from "react";
import Navbar from "./Navbar";
import "../css/History.css"; // Import CSS for styling

const History = () => {
  const orders = [
    { id: 1, date: "2023-10-01", total: 25 },
    { id: 2, date: "2023-09-28", total: 40 },
  ];

  return (
    <>
      <Navbar />
      <div className="history">
        <h2>Order History</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <span className="order-id">Order #{order.id}</span>
              <span className="order-date">{order.date}</span>
              <span className="order-total">Total: ${order.total}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default History;
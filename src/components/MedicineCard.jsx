import React from "react";

const MedicineCard = ({ image, name, description }) => {
  return (
    <div className="medicine-card">
      <img src={image} alt={name} className="medicine-image" />
      <h3 className="medicine-name">{name}</h3>
      <p className="medicine-description">{description}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default MedicineCard;
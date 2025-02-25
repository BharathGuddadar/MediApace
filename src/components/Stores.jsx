import React from "react";
import Navbar from "./Navbar";
import "../css/Stores.css"; // Import CSS for styling

const Stores = () => {
  const stores = [
    {
      id: 1,
      name: "Medi Shop",
      location: "123 Main St, Bangalore",
      description: "Your trusted pharmacy for quality medicines and health products.",
    },
    {
      id: 2,
      name: "Medistore",
      location: "456 Elm St, Bangalore",
      description: "Offering a wide range of prescription and over-the-counter drugs.",
    },
    {
      id: 3,
      name: "MediCare Pharmacy",
      location: "789 Oak St, Mumbai",
      description: "Providing 24/7 pharmaceutical services for your convenience.",
    },
    {
      id: 4,
      name: "HealthPlus",
      location: "101 Maple Ave, Delhi",
      description: "Your one-stop destination for healthcare essentials and consultations.",
    },
    {
      id: 5,
      name: "Wellness Hub",
      location: "202 Birch Rd, Hyderabad",
      description: "A modern pharmacy with personalized care and expert advice.",
    },
    {
      id: 6,
      name: "LifeCare Medicals",
      location: "303 Cedar Dr, Chennai",
      description: "Dedicated to improving health with high-quality medicines and services.",
    },
    {
      id: 7,
      name: "City Pharmacy",
      location: "404 Pine St, Kolkata",
      description: "Supplying trusted healthcare products and medical devices.",
    },
    {
      id: 8,
      name: "QuickMeds",
      location: "505 Redwood Ln, Pune",
      description: "Fast and reliable pharmacy with doorstep delivery services.",
    },
    {
      id: 9,
      name: "PharmaMart",
      location: "606 Ashwood Ave, Jaipur",
      description: "Affordable medicines with expert consultations and services.",
    },
    {
      id: 10,
      name: "GreenMed",
      location: "707 Willow Blvd, Ahmedabad",
      description: "Eco-friendly pharmacy offering organic health products.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="stores-container">
        <h1>Nearby Medical Stores</h1>
        <div className="stores-grid">
          {stores.map((store) => (
            <div className="store-card" key={store.id}>
              <h3>{store.name}</h3>
              <p className="location">{store.location}</p>
              <p className="description">{store.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stores;
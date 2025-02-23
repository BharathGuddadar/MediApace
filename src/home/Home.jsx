import React from "react";
import MedicineCard from "../components/MedicineCard";
import "../css/Home.css"; // Add CSS for styling
import Navbar from "../components/Navbar";

import paracetamol from "../assets/images/paracetamol.jpeg"

const Home = () => {
  // Sample data for medicines
  const medicines = [
    {
      id: 1,
      image: paracetamol,
      name: "Paracetamol",
      description: "Used to treat fever and mild to moderate pain.",
    },
    {
      id: 2,
      image: paracetamol,
      name: "Ibuprofen",
      description: "Used to reduce pain, inflammation, and fever.",
    },
    {
      id: 3,
      image: paracetamol,
      name: "Vitamin C",
      description: "Boosts immunity and overall health.",
    },
    {
      id: 4,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
    {
      id: 5,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
    {
      id: 6,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
    {
      id: 7,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
    {
      id: 8,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
    {
      id: 9,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
    {
      id: 10,
      image: paracetamol,
      name: "Amoxicillin",
      description: "Antibiotic used to treat bacterial infections.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="home">
      <h1>Medicines</h1>
      <div className="medicine-container">
        {medicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            image={medicine.image}
            name={medicine.name}
            description={medicine.description}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
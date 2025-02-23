import React, { useState } from "react";
import "../css/TrackDelivery.css";
import Navbar from "./Navbar";

const TrackDelivery = () => {
  const [trackingId, setTrackingId] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();

    if (!trackingId.trim()) {
      alert("Please enter a tracking ID!");
      return;
    }

    let location = encodeURIComponent(trackingId);
    setMapUrl('https://www.google.com/maps?q=${location}&output=embed');
  };

  return (
    <>
    <Navbar/>
      <div className="track-delivery">
        <div className="track-container">
          <h2>Track Your Delivery</h2>
          <form onSubmit={handleTrack}>
            <input
              type="text"
              placeholder="Enter Tracking ID (e.g., New York, USA)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button type="submit">Track</button>
          </form>

          {mapUrl && (
            <div className="map-container">
              <iframe
                src={mapUrl}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrackDelivery;
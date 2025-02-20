import React from "react";
import "./EventCard.css"; // Import plain CSS

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      {/* Event Image */}
      {event.image ? (
        <img src={event.image} className="event-image" alt={event.title} />
      ) : (
        <div className="no-image">❌ Image Not Available</div>
      )}

      {/* Card Body */}
      <div className="event-details">
        <h5 className="event-title">{event.title}</h5>
        <p className="event-description">{event.description}</p>
        <p className="event-meta">
          📅 {new Date(event.date).toLocaleDateString()} | 📍 {event.location}
        </p>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default EventCard;

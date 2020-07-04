import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../images/room-1.jpeg';
import { Link } from 'react-router-dom';
function Room({ room }) {
  return (
    <article className="room">
      <div className="img-container">
        <img src={room.images[0] || defaultImage} alt="room" />
        <div className="price-top">
          <h6>{room.price}</h6>
          <p>per night</p>
        </div>
        <Link to={`rooms/${room.slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{room.name}</p>
    </article>
  );
}

Room.prototype = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;

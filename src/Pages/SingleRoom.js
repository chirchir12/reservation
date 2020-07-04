import React, { Component } from 'react';
import defaultImage from '../images/room-1.jpeg';
import { RoomsContext } from '../context';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

import StyledHero from '../components/StyledHero';
class SingleRoo extends Component {
  static contextType = RoomsContext;
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImage,
    };
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room exist</h3>
          <Link className="btn-primary" to="/rooms">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      images,
      size,
      price,
      breakfast,
      extras,
      pets,
      capacity,
    } = room;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultImage}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : {size} SQFT</h6>
              <h6>
                max capacity:{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6> {pets ? 'Pets allowed' : 'no pets allowed'} </h6>
              <h6>{breakfast && 'free breakfast'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, idx) => {
              return <li key={idx}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoo;

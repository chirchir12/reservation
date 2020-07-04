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
      </>
    );
  }
}

export default SingleRoo;

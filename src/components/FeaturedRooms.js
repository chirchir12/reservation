import React, { Component } from 'react';

import { RoomsContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
class FeaturedRooms extends Component {
  static contextType = RoomsContext;

  render() {
    let { isLoading, featuredRooms: rooms } = this.context;

    let featuredR = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    console.log(rooms);
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {isLoading ? <Loading /> : featuredR}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;

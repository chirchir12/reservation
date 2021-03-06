import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Service from '../components/Service';
import FeaturedRooms from '../components/FeaturedRooms';

function Home(props) {
  return (
    <>
      <Hero>
        <Banner title="luxurios rooms" subtitle="deluxe rooms starting at $299">
          <Link className="btn-primary" to="/rooms">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Service></Service>
      <FeaturedRooms />
    </>
  );
}

export default Home;

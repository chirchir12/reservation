import React, { Component } from 'react';
import { FaBeer, FaShuttleVan, FaHiking, FaCocktail } from 'react-icons/fa';
import Title from './Title';

class Service extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktail',
        info:
          ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, pariatur.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, pariatur.',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, pariatur.',
      },
      {
        icon: <FaBeer />,
        title: 'strong beer',
        info:
          ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, pariatur.',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, idx) => {
            return (
              <article key={idx} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Service;

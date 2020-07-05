import React, { useContext } from 'react';
import { RoomsContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomFilter({ rooms }) {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = useContext(RoomsContext);
  let types = getUnique(rooms, 'type');
  let guests = getUnique(rooms, 'capacity');
  types = ['all', ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            min={minPrice}
            id="price"
            max={maxPrice}
            value={price}
            className="form-control"
            name="price"
            onChange={handleChange}
          />
        </div>
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              id="size"
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              id="size"
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RoomFilter;

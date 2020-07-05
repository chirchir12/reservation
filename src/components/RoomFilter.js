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
  types = ['all', ...types];
  types = types.map((item, index) => {
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
        {/* select */}
      </form>
    </section>
  );
}

export default RoomFilter;

import React, { Component } from 'react';
import items from './data';

const RoomsContext = React.createContext();

class RoomsProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    isLoading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((item) => item.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      isLoading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempdata = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempdata;
  }

  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    let room = tempRoom.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    let name = target.name;
    let value = event.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];
    capacity = +capacity;
    price = parseInt(price);

    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }

    // filter by guests
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((item) => item.capacity >= capacity);
    }

    //filter by price
    tempRooms = tempRooms.filter((item) => item.price <= price);

    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <RoomsContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomsContext.Provider>
    );
  }
}
const RoomConsumer = RoomsContext.Consumer;
export { RoomsProvider, RoomsContext, RoomConsumer };

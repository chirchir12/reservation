import React, { Component } from 'react';
import items from './data';

const RoomsContext = React.createContext();

class RoomsProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    isLoading: true,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((item) => item.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      isLoading: false,
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
  render() {
    return (
      <RoomsContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomsContext.Provider>
    );
  }
}
const RoomConsumer = RoomsContext.Consumer;
export { RoomsProvider, RoomsContext, RoomConsumer };

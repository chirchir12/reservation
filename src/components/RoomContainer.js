import React, { useContext } from 'react';
import { RoomsContext } from '../context';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';
function RoomContainer(props) {
  const { isLoading, sortedRooms, rooms } = useContext(RoomsContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;

import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';
function Loading(props) {
  return (
    <div className="loading">
      <h4>Rooms Data loading</h4>
      <img src={loadingGif} alt="alt" />
    </div>
  );
}

export default Loading;

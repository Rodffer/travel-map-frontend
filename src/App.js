import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6566,
    longitude: -122.4376,
    zoom: 4
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.MAP_BOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        <Marker
          latitude={37}
          longitude={-122}
          offsetLeft= {-20}
          offsetTop= {-10}
        >
          <div>Você está aqui</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;

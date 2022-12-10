import mapboxgl from "mapbox-gl";
import { useRef } from "react";
const Map = () => {
  //some kind of refernece, no idea what it does yet
  const mapContainerRef = useRef(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXNhYWNlMDAiLCJhIjoiY2w0MG5wdzN2MXVoNjNibnoxZmdpY2lsdyJ9.pZWS8ItW9mQOVYaPTadyTA";
  const map = new mapboxgl.Map({
    container: mapContainerRef.current, // container ID                              url: https://account.mapbox.com/
    style: "mapbox://styles/asaace00/cl41mpggv004o14mrudakdwgr", // username: asaace00
    center: [-74.5, 40], // starting position [lng, lat]        //password: A900@1491s
    zoom: 9, // starting zoom
  });
  const mapboxStyle = "mapbox://styles/asaace00/cl41mpggv004o14mrudakdwgr";
  return (
    <>
      {/* <ReactMapGL
              mapboxAccessToken=pk.eyJ1IjoiYXNhYWNlMDAiLCJhIjoiY2w0MG5wdzN2MXVoNjNibnoxZmdpY2lsdyJ9.pZWS8ItW9mQOVYaPTadyTA
        latitude={-74.5}
        longitude={40}
        zoom={9}
        style={{ mapboxStyle }}
      /> */}
      <div ref={mapContainerRef}></div>
    </>
  );
};

export default Map;

import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

export default function MapRender() {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
      if (ref.current && !map) {
          mapboxgl.accessToken = "pk.eyJ1IjoiYXNhYWNlMDAiLCJhIjoiY2w0MG5wdzN2MXVoNjNibnoxZmdpY2lsdyJ9.pZWS8ItW9mQOVYaPTadyTA";
      const map = new mapboxgl.Map({
        container: ref.current,
          style: "mapbox://styles/asaace00/cl41mpggv004o14mrudakdwgr",
        center: [0, 0],
        zoom: 1,
      });
      setMap(map);
    }
  }, [ref, map]);
  return <div className="map-container" ref={ref} />;
}

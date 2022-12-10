import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

export default function MapRender() {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 1,
      });
      setMap(map);
    }
  }, [ref, map]);
  return <div className="map-container" ref={ref} />;
}

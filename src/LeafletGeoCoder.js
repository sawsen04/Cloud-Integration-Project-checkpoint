import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
function LeafletGeoCoder() {
  const map = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        const latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  });
  return null;
}

export default LeafletGeoCoder;

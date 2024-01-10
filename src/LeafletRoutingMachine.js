import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
function LeafletRoutingMachine() {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90],
  });
  useEffect(() => {
    const marker1 = L.marker([36.81202966835531, 10.143146261373557], {
      icon: DefaultIcon,
    }).addTo(map);
    map.on("click", function (e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(36.81202966835531, 10.143146261373557),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.6,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
      })
        .on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              marker1.setLatLng([c.lat, c.lng]);
            }, 100 * i);
          });
        })
        .addTo(map);
    });
  });
  return null;
}

export default LeafletRoutingMachine;

import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "./App.css";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import SecTwo from "./components/section-two/SecTwo";
import LeafletGeoCoder from "./LeafletGeoCoder";

function App() {
  const position = [36.81202966835531, 10.143146261373557];
  return (
    <div className="App">
      <SecTwo />
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeoCoder />
        <LeafletRoutingMachine />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;

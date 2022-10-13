import { MapContainer, MapContainerProps, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps extends MapContainerProps {
  height: number;
  children: React.ReactNode;
}

const Map = ({ height, children, ...rest }: MapProps) => {
  return (
    <MapContainer style={{ height, width: "100%" }} {...rest}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  );
};

export default Map;
import L from 'leaflet';
import urlImage from '../assets/marker.svg';

const iconMarker = new L.Icon({
    iconUrl: urlImage,
    iconSize: new L.Point(45, 55),
    className: 'react-leaflet-div-icon',
    shadowUrl: urlImage,
    shadowSize: new L.Point(45, 55),
});

export default iconMarker;
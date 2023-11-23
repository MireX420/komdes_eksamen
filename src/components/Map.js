import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import blodBankSkilt from '../photos/blodbank-skilt.png';
import sykehusSkilt from '../photos/sykehusOstfold-skilt.png';


export default function Map(bbFredrikstad, startPosition, kalnes, position, flyTo, mapRef){



  const [zoomLevel, setZoomLevel] = useState(10);

  const blodIkon = new L.Icon({
    iconUrl: blodBankSkilt,
    iconRetinaUrl: blodBankSkilt,
    popupAnchor:  [-0, -0],
    iconSize: [36,48],     
});

const sykehusIkon = new L.Icon({
  iconUrl: sykehusSkilt,
  iconRetinaUrl: sykehusSkilt,
  popupAnchor:  [-0, -0],
  iconSize: [36,48],     
});

  return(
    <>
    <button style={{height: "20px", width: "20px"}} onClick={() => flyTo()}></button>
    <MapContainer id="map" ref={mapRef} center={startPosition} zoom={zoomLevel} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={blodIkon} position={bbFredrikstad}> </Marker>
    <Marker icon={blodIkon} position={bbHalden}> </Marker>
    <Marker icon={blodIkon} position={bbSarpsborg}> </Marker>
    <Marker icon={blodIkon} position={bbMoss}> </Marker>
    <Marker icon={blodIkon} position={bbAskim}> </Marker>
    <Marker icon={sykehusIkon} position={kalnes}><Popup>Sykehuset Østfold Kalnes</Popup></Marker>
  </MapContainer>
  </>

  )
}
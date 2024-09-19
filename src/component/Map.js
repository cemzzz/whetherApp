import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map () {
  return (
    <MapContainer
        center={[51.505, -0.09]}  // 초기 위치 (위도, 경도)
        zoom={2}  // 줌 레벨
        style={{ height: "100vh", width: "100%" }}  // 지도 크기
    >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
  </MapContainer>
  )
}

export default Map
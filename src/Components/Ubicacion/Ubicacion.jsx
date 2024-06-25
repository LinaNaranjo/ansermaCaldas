// src/components/LocationPicker.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import "./ubicacion.scss";
import { actionGetPueblos } from '../../Redux/Pueblos/PueblosActions';

const Ubicacion = () => {
  const dispatch = useDispatch();
  const { pueblos, isLoadingPueblos } = useSelector(state => state.pueblos);

  useEffect(() => {
    dispatch(actionGetPueblos());
  }, [dispatch]);

  if (isLoadingPueblos) {
    return <div>Cargando mapa...</div>;
  }

  return (
    <div className="map-container">
      {pueblos.length > 0 && (
        <MapContainer center={[pueblos[0].lat, pueblos[0].lng]} zoom={10} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {pueblos.map((pueblo) => (
            <Marker key={pueblo.id} position={[pueblo.lat, pueblo.lng]}>
              <Popup>
                <p>{pueblo.descripcion}</p>
                <p>Latitud: {pueblo.lat}</p>
                <p>Longitud: {pueblo.lng}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Ubicacion;







// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Corrige la inconsistencia del ícono de Leaflet en Webpack
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
//   iconUrl: require("leaflet/dist/images/marker-icon.png").default,
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
// });

// const Ubicacion = () => {
//   const mapTilerApiKey = 'IfId4psyzFQU1fRwOAQg';

//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         url={`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
//         attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default Ubicacion;





// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchLocation } from "../../Redux/Location/LocationSlice";
// // import Cript from "../../Assets/Cript/Cript";
// // //import './mapComponent.scss';

// // const Ubicacion = ({ id }) => {
// //   const dispatch = useDispatch();
// //   const { lat, lng, status, error } = useSelector((state) => state.location);

// //   useEffect(() => {
// //     if (id) {
// //       dispatch(fetchLocation(id));
// //     }
// //   }, [dispatch, id]);

// //   const mapSrc = `https://www.google.com/maps/embed/v1/view?key=${Cript}&center=${lat},${lng}&zoom=12`;

// //   if (status === "loading") {
// //     return <div>Loading map...</div>;
// //   }

// //   if (status === "failed") {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <p>Ubicación del destino</p>
// //       <div>
// //         <iframe
// //           title="map"
// //           width="600"
// //           height="450"
// //           style={{ border: 0 }}
// //           src={mapSrc}
// //           allowFullScreen=""
// //           loading="lazy"
// //         ></iframe>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Ubicacion;

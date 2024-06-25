// import { doc, getDoc } from 'firebase/firestore';
// import { dataBase } from "../../Firebase/firebaseConfig";

// export const SET_LOCATION = 'SET_LOCATION';

// export const setLocation = (location) => ({
//   type: SET_LOCATION,
//   payload: location,
// });

// export const fetchLocation = () => async (dispatch) => {
//   const docRef = doc(dataBase, 'Pueblos', 'Anserma Caldas');
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     const data = docSnap.data();
//     console.log('Datos de ubicación obtenidos:', data);
//     dispatch(setLocation({ lat: data.lat, lng: data.lng }));
//   } else {
//     console.log('No existe el documento de ubicación!');
//   }
// };


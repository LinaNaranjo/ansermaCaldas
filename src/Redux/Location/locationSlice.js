// // src/features/location/locationSlice.js
// // import { createSlice } from '@reduxjs/toolkit';

// // export const locationSlice = createSlice({
// //   name: 'location',
// //   initialState: {
// //     lat: null,
// //     lng: null,
// //   },
// //   reducers: {
// //     setLocation: (state, action) => {
// //       state.lat = action.payload.lat;
// //       state.lng = action.payload.lng;
// //     },
// //   },
// // });

// // export const { setLocation } = locationSlice.actions;
// // export default locationSlice.reducer;








// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { doc, getDoc } from 'firebase/firestore';
// import { dataBase } from '../../Firebase/firebaseConfig';

// export const fetchLocation = createAsyncThunk('location/fetchLocation', async (id) => {
//   const docRef = doc(dataBase, 'Pueblos', id);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     throw new Error('No such document!');
//   }
// });

// const locationSlice = createSlice({
//   name: 'location',
//   initialState: {
//     lat: null,
//     lng: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLocation.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchLocation.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.lat = action.payload.lat;
//         state.lng = action.payload.lng;
//       })
//       .addCase(fetchLocation.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default locationSlice.reducer;

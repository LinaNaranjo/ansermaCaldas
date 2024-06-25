import { configureStore } from "@reduxjs/toolkit";
import pueblosReducer from "./Pueblos/PueblosSlice";
//import gastronomiaReducer from './negocios/negociosSlice';
//import locationReducer from './Location/locationSlice';


const store = configureStore({
  reducer: {
    pueblos: pueblosReducer,
    //gastronomia: gastronomiaReducer,
    //location:locationReducer

  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const pueblosSlice = createSlice({
  name: "pueblos",
  initialState: {
    pueblos: [],
    isLoadingPueblos: false,
    errorPueblos: null,
    successRequest: null,
    isactiveFilter: false
  },
  reducers: {
    pueblosRequest: (state) => {
      state.isLoadingPueblos = true;
      state.errorPueblos = null;
      state.successRequest = null;
    },
    fillPueblos: (state, action) => {
      state.pueblos = action.payload;
      state.isLoadingPueblos = false;
      state.errorPueblos = null;
      state.successRequest = true;
      state.isactiveFilter = false;
    },
    pueblosFail: (state, action) => {
      (state.isLoadingPueblos = false),
        (state.errorPueblos = action.payload),
        (state.successRequest = false);
    },
    addPueblos: (state, action) => {
      state.pueblos.push(action.payload);
      state.isLoadingPueblos = false;
      state.successRequest = "addPueblos";
    },
    editPueblo: (state, action) => {
      state.isLoadingPueblos = false;
      state.pueblos = state.pueblos.map((item) =>
        action.payload.id == item.id ? { ...item, ...action.payload } : item
      );
      state.successRequest = "editPueblos";
    },
    deletePueblo: (state, action) => {
      state.isLoadingPueblos = false;
      state.pueblos = state.pueblos.filter(
        (item) => item.id != action.payload
      );
      state.successRequest = true;
    },
    setSuccessRequest: (state) => {
      state.successRequest = null;
    },
    filterPueblos: (state, action) => {
      state.pueblos = action.payload;
      state.isLoadingPueblos = false;
      state.errorPueblos = null;
      state.successRequest = true;
      state.isactiveFilter = true;
    }
  },
});

export const {
  pueblosRequest,
  fillPueblos,
  pueblosFail,
  addPueblos,
  editPueblo,
  deletePueblo,
  setSuccessRequest,
  filterPueblos,
} = pueblosSlice.actions; //Creators action

export default pueblosSlice.reducer; //La función reductora
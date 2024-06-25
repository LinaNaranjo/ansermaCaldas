import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import {
  addPueblos,
  deletePueblo,
  editPueblo,
  fillPueblos,
  filterPueblos,
  pueblosFail,
  pueblosRequest,
} from "./PueblosSlice";

const COLLECTION_NAME = "Pueblos"; //Nombre de la colección
const collectionRef = collection(dataBase, COLLECTION_NAME); //Referencia de la colección

export const actionAddPueblos = (newPueblo) => {
  return async (dispatch) => {
    dispatch(pueblosRequest());
    try {
      const docRef = addDoc(collectionRef, newPueblo);
      dispatch(
        addPueblos({
          id: docRef.id,
          ...newPueblo,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(pueblosFail(error.message));
    }
  };
};

export const actionGetPueblos = () => {
  return async (dispatch) => {
    dispatch(pueblosRequest());
    const pueblos = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        pueblos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillPueblos(pueblos));
    } catch (error) {
      console.error(error);
      dispatch(pueblosFail(error.message));
    }
  };
};

export const actionFilterPueblos = (fieldName, fieldValue) => {
  return async (dispatch) => {
    console.log("fieldName:", fieldName);
    console.log("fieldValue:", fieldValue);
    dispatch(pueblosRequest());
    const pueblos = [];
    try {
      const q = query(collectionRef, where(fieldName, "==", fieldValue));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        pueblos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("pueblos filtrados:", pueblos);
      dispatch(filterPueblos(pueblos));
    } catch (error) {
      console.error(error);
      dispatch(pueblosFail(error.message));
    }
  };
};

export const actionDeletePueblos = (idPueblo) => {
  return async (dispatch) => {
    dispatch(pueblosRequest())
    try {
      await deleteDoc(doc(dataBase, COLLECTION_NAME, idPueblo));
      dispatch(deletePueblo(idPueblo));
    } catch (error) {
      console.error(error);
      dispatch(pueblosFail(error.message));
    }
  }
};

export const actionEditPueblos = (idPueblo, editedPueblo) => {
  return async (dispatch) => {
    dispatch(pueblosRequest());
    try {
      const puebloRef = doc(dataBase, COLLECTION_NAME, idPueblo);

      await updateDoc(puebloRef, editedPueblo);
      dispatch(
        editPueblo({
          id: idPueblo,
          ...editedPueblo,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(pueblosFail(error.message));
    }
  };
};
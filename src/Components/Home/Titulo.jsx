import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPueblos } from "../../Redux/Pueblos/PueblosActions";
import "./titulo.scss"

const Titulo = () => {
  const { pueblos, isLoadingPueblos } = useSelector((store) => store.pueblos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetPueblos());
  }, [dispatch]);
  if (isLoadingPueblos) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="contenedorTitulo">
        <p>Bienvenido a:</p>
        <section className="contenedorPueblo">
          {pueblos.map((pueblo) => (
            <div key={pueblo.id}>
              <h2 className="nombrePueblo">{pueblo?.nombre}</h2>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
export default Titulo;

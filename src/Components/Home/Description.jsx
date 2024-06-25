// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actionGetPueblos } from "../../Redux/Pueblos/PueblosActions";
// import "./descripcion.scss"

// const Description = () => {
//   const { pueblos, isLoadingPueblos } = useSelector((store) => store.pueblos);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(actionGetPueblos());
//   }, [dispatch]);

//   if (isLoadingPueblos) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <>
//       <div className="contenedorDescripcion">
//         <p className="texto">Descubre este pueblito</p>
//         <section className="contenedorDescri">
//           {pueblos.map((pueblo) => (
//             <div key={pueblo.id}>
//               <p>{pueblo?.descripcion}</p>{" "}
//             </div>
//           ))}
//         </section>
//       </div>
//     </>
//   );
// };
// export default Description;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPueblos } from "../../Redux/Pueblos/PueblosActions";
import "./descripcion.scss";

const Description = () => {
  const { pueblos, isLoadingPueblos } = useSelector((store) => store.pueblos);
  const dispatch = useDispatch();
  const [mostrarDescripcionCompleta, setMostrarDescripcionCompleta] =
    useState(false);
  const [mostrarDescripcionPequena, setMostrarDescripcionPequena] =
    useState(true);

  const toggleDescripcionCompleta = () => {
    setMostrarDescripcionCompleta(!mostrarDescripcionCompleta);
    setMostrarDescripcionPequena(!mostrarDescripcionPequena);
  };

  useEffect(() => {
    dispatch(actionGetPueblos());
  }, [dispatch]);

  if (isLoadingPueblos) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="contenedorDescripcion">
        <p className="texto">Descubre este pueblito</p>
        <section className="contenedorDescri">
          {pueblos.map((pueblo) => (
            <div key={pueblo.id}>
              <p>
                {mostrarDescripcionCompleta
                  ? pueblo?.descripcion
                  : mostrarDescripcionPequena
                  ? `${pueblo?.descripcion.slice(0, 100)}...`
                  : pueblo?.descripcion}
              </p>
            </div>
          ))}
          <button onClick={toggleDescripcionCompleta}>
            {mostrarDescripcionCompleta ? "Ver menos" : "Ver más"}
          </button>
        </section>
      </div>
    </>
  );
};
export default Description;

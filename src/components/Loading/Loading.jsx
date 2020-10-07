import React from "react";
import "./Loading.styl";

const Animacion = () => {
    return (
        <div className="animation">

        </div>
    )
};

const Loading = ({ mensaje }) => {
  return (
    <div className="loading">
      <Animacion />
      <h3>Cargando...</h3>
    </div>
  );
};

export default Loading;

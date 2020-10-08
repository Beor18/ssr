import React from "react";
import "./Loading.styl";

const Animacion = () => {
  return <div className="animation"></div>;
};

const Loading = ({ mensaje }) => {
  return (
    <div className="loading">
      <Animacion />
      <h3>Cargando...</h3>
    </div>
  );
};

const RenderLoading = ({ result, input, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (!input || input.length === 0) {
    return (
      <div className="welcome">
        <h1>Bienvenidos al buscador!!!</h1>
      </div>
    );
  }

  return (
    <div className="not_result">
      {(!result || result.length === 0) && <h1>No hubo resultado! Intente nuevamente</h1>}
    </div>
  );
};

export default RenderLoading;

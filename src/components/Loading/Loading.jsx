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
        <h1>Bienvenido al Buscador de Rick And Morty</h1>
        <h3><span>Api utilizada:</span> Rick and Morty</h3>
      </div>
    );
  }

  return (
    <div className="not_result">
      {(!result || result.length === 0) && (
        <div className="not_result">
          <h1>No hubo resultado!</h1>
          <p>Intente nuevamente</p>
        </div>
      )}
    </div>
  );
};

export default RenderLoading;

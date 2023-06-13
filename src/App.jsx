import React from "react";
import CrearPedido from "./components/crearPedido";
import PedidosList from "./components/PedidoList";

const App = () => {
  return (
    <div className="block mt-20">
      <PedidosList></PedidosList>
    </div>
  );
};

export default App;

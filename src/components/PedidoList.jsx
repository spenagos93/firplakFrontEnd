import React, { useState, useEffect } from 'react';
import LineasPedidosList from './LineasPedido';

const PedidosList = () => {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  useEffect(() => {
    fetch('https://firplakbackend-production.up.railway.app/api/pedidos')
      .then(response => response.json())
      .then(data => setPedidos(data))
      .catch(error => console.error(error));
  }, []);

  const handlePedidoClick = (pedido) => {
    setPedidoSeleccionado(pedido);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Lista de Pedidos</h1>
      {pedidos.length > 0 ? (
        <>
          <table className="table-auto w-full rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-blue-200 text-blue-800">Consecutivo</th>
                <th className="px-4 py-2 bg-blue-200 text-blue-800">Fecha Pedido</th>
                <th className="px-4 py-2 bg-blue-200 text-blue-800">Estado Pedido</th>
                <th className="px-4 py-2 bg-blue-200 text-blue-800">Cliente</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map(pedido => (
                <tr key={pedido.id} onClick={() => handlePedidoClick(pedido)} className="cursor-pointer">
                  <td className="border px-4 py-2">{pedido.consecutivo}</td>
                  <td className="border px-4 py-2">{pedido.fecha_pedido}</td>
                  <td className="border px-4 py-2">{pedido.estado_pedido}</td>
                  <td className="border px-4 py-2">{pedido.cliente}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {pedidoSeleccionado && (
            <div className="mt-4">
              <LineasPedidosList id={pedido.id}></LineasPedidosList>
            </div>
          )}
        </>
      ) : (
        <p>No se encontraron pedidos.</p>
      )}
    </div>
  );
};

export default PedidosList;



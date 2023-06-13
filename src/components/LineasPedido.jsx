import React, { useState, useEffect } from 'react';

const LineasPedidosList = ({id}) => {
  const [lineasPedidos, setLineasPedidos] = useState([]);

  useEffect(() => {
    fetch(`https://firplakbackend-production.up.railway.app/api/pedidos/lineas/${id}`)
      .then(response => response.json())
      .then(data => setLineasPedidos(data))
      .catch(error => console.error(error));
  }, [props.id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Líneas de Pedidos</h1>
      {lineasPedidos.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Destino</th>
              <th className="px-4 py-2">Producto SKU</th>
              <th className="px-4 py-2">Cantidad</th>
              <th className="px-4 py-2">Fecha Despacho</th>
              <th className="px-4 py-2">Tipo Pedido</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {lineasPedidos.map(lineaPedido => (
              <tr key={lineaPedido.id}>
                <td className="border px-4 py-2">{lineaPedido.destino}</td>
                <td className="border px-4 py-2">{lineaPedido.producto_sku}</td>
                <td className="border px-4 py-2">{lineaPedido.cantidad}</td>
                <td className="border px-4 py-2">{lineaPedido.fecha_despacho}</td>
                <td className="border px-4 py-2">{lineaPedido.tipo_pedido}</td>
                <td className="border px-4 py-2">{lineaPedido.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron líneas de pedidos.</p>
      )}
    </div>
  );
};

export default LineasPedidosList;

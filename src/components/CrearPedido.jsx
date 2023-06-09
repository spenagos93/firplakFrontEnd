import { useState } from 'react';
import axios from 'axios';

const CrearPedido = () => {
  const [estadoPedido, setEstadoPedido] = useState('');
  const [cliente, setCliente] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/pedidos', {
        estado_pedido: estadoPedido,
        cliente: cliente
      });

      alert(response.data);

      // Limpiar el formulario
      setEstadoPedido('');
      setCliente('');
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar el error de la API según tus necesidades
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-gray-100 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Crear Pedido</h2>
      <div className="mb-4">
        <label htmlFor="estadoPedido" className="block text-gray-700">Estado del Pedido</label>
        <input
          type="text"
          id="estadoPedido"
          className="w-full border-gray-300 rounded"
          value={estadoPedido}
          onChange={(e) => setEstadoPedido(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cliente" className="block text-gray-700">Cliente</label>
        <input
          type="text"
          id="cliente"
          className="w-full border-gray-300 rounded"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Crear Pedido</button>
    </form>
  );
};

export default CrearPedido;

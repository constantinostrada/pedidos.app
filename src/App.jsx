import { useState } from 'react'
import './App.css'


function App() {
  
  const [plato, setPlato] = useState('');
  const [pedidos, setPedidos] = useState([]);

  const handlePlatoChange = (event) => {
    setPlato(event.target.value);
  };

  const handleCrearPedido = () => {
    if (plato.trim() !== '') {
      const nuevoPedido = {
        plato: plato.trim(),
      };

      setPedidos([...pedidos, nuevoPedido]);
      setPlato('');
    }
  };

  const handleEliminarPedido = (index) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos.splice(index, 1);
    setPedidos(nuevosPedidos);
  };

  return(
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">Lista de Pedidos</h1>

      <form className="flex items-center mb-4">
        <input
          type="text"
          value={plato}
          onChange={handlePlatoChange}
          placeholder="Ingrese el nombre del plato"
          className="flex-grow border border-gray-400 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleCrearPedido}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r focus:outline-none"
        >
          Crear Pedido
        </button>
      </form>

      <ul className="space-y-2">
        {pedidos.map((pedido, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded p-4"
          >
            <span>{pedido.plato}</span>
            <button
              type="button"
              onClick={() => handleEliminarPedido(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App

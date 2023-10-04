import './App.css';
// src/App.js
import React, { useState } from 'react';
import List from './List';
import Form from './Form';

function App() {
  const [data, setData] = useState([]);
  const [idCounter, setIdCounter] = useState(1); // Variable para controlar el ID autoincrementable

  const handleAdd = (name, description) => {
    const newItem = {
      id: idCounter, // Asigna el ID actual de la variable idCounter
      name: name,
      description: description,
    };
    setData([...data, newItem]);
    setIdCounter(idCounter + 1); // Incrementa el contador de ID para el próximo elemento
  };

  //Eliminacion por filtro
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id); // Filtra elementos para eliminar el elemento con el ID dado
    setData(updatedData); // Actualiza el estado de datos con la nueva lista
  };

  //Update
  const handleUpdate = (id, name, description) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, name: name, description: description }; // Actualiza el nombre y la descripción del elemento con el ID dado
      }
      return item;
    });
    setData(updatedData); // Actualiza el estado de datos con la nueva lista que incluye el elemento actualizado
  };

  //CRUD
  return (
    <div className="container">
      <h1>Amigurumis</h1>
      <Form onSubmit={handleAdd} /> {/* Formulario para agregar nuevos elementos */}
      <List data={data} onDelete={handleDelete} onUpdate={handleUpdate} /> {/* Lista de elementos con capacidad de edición y eliminación */}
    </div>
  );

}

export default App;

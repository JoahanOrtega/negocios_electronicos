import './App.css';
// src/App.js
import React, { useState } from 'react';

import Form from './Form';

function App() {
  const [data, setData] = useState([]);

  const handleAdd = (name, description) => {
    const newItem = {
      id: Date.now(),
      name: name,
      description: description, // Agrega la descripción al nuevo elemento
    };
    setData([...data, newItem]); // Agrega un nuevo elemento al estado de datos
  };

  //CRUD
  return (
    <div className="container">
      <h1>Antojitos Mexicanos</h1>
      <Form onSubmit={handleAdd} /> {/* Formulario para agregar nuevos elementos */}
    </div>
  );

}

export default App;

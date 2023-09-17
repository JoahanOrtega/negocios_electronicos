// src/components/List.js
import React, { useState } from 'react';
import './List.css';

const List = ({ data, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null); // Estado para rastrear el ID del elemento que se está editando
  const [editedName, setEditedName] = useState(''); // Estado para rastrear el nombre editado
  const [editedDescription, setEditedDescription] = useState(''); // Estado para rastrear la descripción editada


  return (
    <div className="table-container">
      <table className="small-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {item.id === editingId ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {item.id === editingId ? (
                  <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                ) : (
                  item.description
                )}
              </td>
              
              <td>
                <button onClick={() => onDelete(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;


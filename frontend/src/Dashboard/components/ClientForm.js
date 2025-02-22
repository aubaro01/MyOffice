import React, { useState } from 'react';
import axios from 'axios';

const ClienteForm = ({ cliente, onSave }) => {
  const [form, setForm] = useState(cliente || {
    Nome_Cliente: '',
    Contacto_Cliente: '',
    Email_Cliente: '',
    NIF: '',
    obs: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = cliente
        ? await axios.put(`http://localhost:8000/api/clientes/${cliente.id_Cliente}`, form)
        : await axios.post('http://localhost:8000/api/clientes', form);
      onSave(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Nome</label>
        <input
          type="text"
          value={form.Nome_Cliente}
          onChange={(e) => setForm({ ...form, Nome_Cliente: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Contacto</label>
        <input
          type="text"
          value={form.Contacto_Cliente}
          onChange={(e) => setForm({ ...form, Contacto_Cliente: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={form.Email_Cliente}
          onChange={(e) => setForm({ ...form, Email_Cliente: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">NIF</label>
        <input
          type="text"
          value={form.NIF}
          onChange={(e) => setForm({ ...form, NIF: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Observações</label>
        <textarea
          value={form.obs}
          onChange={(e) => setForm({ ...form, obs: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700">
        Salvar
      </button>
    </form>
  );
};

export default ClienteForm;
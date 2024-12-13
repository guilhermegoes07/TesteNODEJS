import React, { useState } from "react";
import axios from "axios";
import "./ProductForm.css";
import Header from "../Header";

const ProductForm = () => {
  
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    descricao: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.nome || !formData.preco || !formData.descricao) {
      setError("Todos os campos são obrigatórios.");
      return false;
    }
    if (formData.preco <= 0 || isNaN(parseFloat(formData.preco))) {
      setError("O preço deve ser um número positivo com até duas casas decimais.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:3000/produtos", {
        ...formData,
        preco: parseFloat(formData.preco).toFixed(2),
      });
      if (response.status === 201) {
        setMessage("Produto cadastrado com sucesso!");
        setFormData({ nome: "", preco: "", descricao: "" });
      }
    } catch (err) {
      setError("Erro ao cadastrar o produto. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div>
    <Header />
    <div className="form-container">
      <h2>Cadastro de Produtos</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            step="0.01"
            min="0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </div>
  );
};

export default ProductForm;

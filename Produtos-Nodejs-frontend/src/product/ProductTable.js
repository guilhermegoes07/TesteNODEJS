import React, { useState } from "react";
import Pagination from "./Pagination";
import Header from "../Header";

function ProductTable({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
    <Header/>
    <div style={containerStyle}>
      <h1 style={titleStyle}>Tabela de Produtos</h1>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} style={rowStyle}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>R$ {product.preco}</td>
              <td>{product.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "20px",
  color: "#4caf50",
  fontWeight: "bold",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "20px",
};

const theadStyle = {
  backgroundColor: "#4caf50",
  color: "#fff",
  fontWeight: "bold",
};

const rowStyle = {
  backgroundColor: "#fff",
  borderBottom: "1px solid #ddd",
};

const cellStyle = {
  padding: "10px",
  textAlign: "center",
};

export default ProductTable;

import React from "react";

const ProductRow = ({ product }) => {
  console.log("Rendering row:", product.id); //renderizações
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.nome}</td>
      <td>{product.preco}</td>
      <td>{product.descricao}</td>
    </tr>
  );
};

//Armazena a renderização
export default React.memo(ProductRow);

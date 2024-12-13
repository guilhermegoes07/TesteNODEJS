import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Gerenciador de Produtos</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/form" style={linkStyle}>
          Formulário
        </Link>
        <Link to="/table" style={linkStyle}>
          Tabela
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#4caf50",
  padding: "20px",
  textAlign: "center",
  color: "#fff",
};

const titleStyle = {
  marginBottom: "10px",
  fontSize: "2rem",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#3e8e41",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s",
};

linkStyle[":hover"] = {
  backgroundColor: "#367a37",
};

export default Header;

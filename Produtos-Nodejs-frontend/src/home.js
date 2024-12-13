import React from "react";
import Header from "./Header";

const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("authToken");
  navigate("/login");
};

function Home() {
  return (
    <div style={homeStyle}>
      <Header />
      <section style={sectionStyle}>
        <h2>Bem-vindo!</h2>
        <p>Este sistema ajuda você a gerenciar produtos de forma simples e eficiente. </p>
        <p>Escolha uma das opções no menu acima para começar.</p>
        <p>Feito por: Guilherme Santiago</p>
        <button onClick={handleLogout}>Sair</button>
      </section>
    </div>
  );
}

const homeStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  backgroundColor: "#f4f4f4",
  height: "100vh",
  padding: "20px",
};

const sectionStyle = {
  marginTop: "20px",
  fontSize: "18px",
  color: "#333",
  lineHeight: "1.5",
};

export default Home;

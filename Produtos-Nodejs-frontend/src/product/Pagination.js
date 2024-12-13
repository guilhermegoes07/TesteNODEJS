import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div style={paginationStyle}>
      <button
        style={buttonStyle}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          style={{
            ...buttonStyle,
            backgroundColor: currentPage === index + 1 ? "#4caf50" : "#fff",
            color: currentPage === index + 1 ? "#fff" : "#000",
          }}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        style={buttonStyle}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
}

const paginationStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  margin: "20px 0",
};

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#fff",
  color: "#000",
  transition: "background-color 0.3s",
};

export default Pagination;

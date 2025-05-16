// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div style={cardStyles.card}>
      <img src={product.image} alt={product.name} style={cardStyles.image} />
      <h2 style={cardStyles.name}>{product.name}</h2>
      <p style={cardStyles.price}>
        {product.discount > 0 ? (
          <>
            <span style={cardStyles.originalPrice}>${product.price.toFixed(2)}</span>{" "}
            <span style={cardStyles.discountedPrice}>
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </span>
          </>
        ) : (
          `$${product.price.toFixed(2)}`
        )}
      </p>
      {product.deal && <span style={cardStyles.dealBadge}>Deal</span>}
    </div>
  );
}

const cardStyles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
    padding: "20px",
    textAlign: "center",
    position: "relative",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#333",
  },
  price: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#555",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#999",
    marginRight: "10px",
  },
  discountedPrice: {
    color: "#ff4b2b",
    fontWeight: "bold",
  },
  dealBadge: {
    position: "absolute",
    top: "15px",
    left: "15px",
    background: "#ff4b2b",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "700",
  },
};

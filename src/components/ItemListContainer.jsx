import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <main className="item-list">
      <div className="item-list__inner container">
        <h2 className="item-list__title">{greeting}</h2>
        <p className="item-list__subtitle">Aquí se mostrará el catálogo de productos próximamente.</p>
      </div>
    </main>
  );
};

export default ItemListContainer;

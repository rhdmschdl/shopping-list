import React from "react";
import "./ShoppingTemplate.scss";

const ShoppingTemplate = ({ children }) => {
  return (
    <div className="ShoppingTemplate">
      <div className="app-title">장바구니 목록</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ShoppingTemplate;

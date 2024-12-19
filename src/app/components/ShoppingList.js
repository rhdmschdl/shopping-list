import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import "./ShoppingList.scss";

const ShoppingList = ({ items, onRemove, onToggle, onUpdate }) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat().format(total);

  return (
    <div className="ShoppingList">
      {items.map((item) => (
        <ShoppingListItem
          item={item}
          key={item.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
      <div className="total">총합: {formattedTotal} 원</div>
    </div>
  );
};

export default ShoppingList;

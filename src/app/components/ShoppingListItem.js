import React, { useState } from "react";
import {
  MdCheckCircle,
  MdOutlineCircle,
  MdOutlineHighlightOff,
} from "react-icons/md";
import cn from "classnames";
import "./ShoppingListItem.scss";

const ShoppingListItem = ({ item, onRemove, onToggle, onUpdate }) => {
  const { id, text, checked, price, quantity } = item;
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleUpdate = () => {
    if (newPrice && newQuantity) {
      onUpdate(id, parseInt(newPrice), parseInt(newQuantity));
    }
  };

  return (
    <>
      <div className="ShoppingListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckCircle /> : <MdOutlineCircle />}
          <div className="text">{text}</div>
        </div>
        <div className="details">
          <span>
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              style={{ width: "50px", marginRight: "5px" }}
            />
            원
          </span>
          <span>
            <input
              type="number"
              value={newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
              style={{ width: "30px", margin: "0px 5px" }}
            />
            개
          </span>
          <button
            onClick={handleUpdate}
            style={{
              margin: "0px 10px",
              backgroundColor: "rgb(152, 183, 255)",
              border: "none",
              borderRadius: "3px",
              color: "white",
              fontWeight: "bold",
              padding: "2px 5px",
            }}
          >
            수정
          </button>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdOutlineHighlightOff />
        </div>
      </div>
    </>
  );
};

export default ShoppingListItem;

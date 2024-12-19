// 최고은/60231190/기초웹 과제 #4

"use client";
import React, { useState, useRef, useCallback } from "react";
import ShoppingTemplate from "./components/ShoppingTemplate";
import ShoppingInsert from "./components/ShoppingInsert";
import ShoppingList from "./components/ShoppingList";

export default function Page() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "오렌지 주스",
      price: 2500,
      quantity: 2,
    },
    {
      id: 2,
      text: "플레인 요거트",
      price: 3500,
      quantity: 1,
    },
    {
      id: 3,
      text: "시리얼",
      price: 5000,
      quantity: 1,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text, price, quantity) => {
    const item = {
      id: nextId.current,
      text,
      checked: false,
      price: price || 0,
      quantity: quantity || 0,
    };
    setItems((prevItems) => prevItems.concat(item));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items]
  );

  const onToggle = useCallback(
    (id) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    },
    [items]
  );

  const onUpdate = useCallback(
    (id, newPrice, newQuantity) => {
      setItems(
        items.map((item) =>
          item.id === id
            ? { ...item, price: newPrice, quantity: newQuantity }
            : item
        )
      );
    },
    [items]
  );

  return (
    <ShoppingTemplate>
      <ShoppingInsert onInsert={onInsert} />
      <ShoppingList
        items={items}
        onRemove={onRemove}
        onToggle={onToggle}
        onUpdate={onUpdate}
      />
      <div
        style={{
          marginTop: "25px",
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
        }}
      >
        최고은/60231190/기초웹 과제 #4
      </div>
    </ShoppingTemplate>
  );
}

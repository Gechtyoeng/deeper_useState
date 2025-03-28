import React from "react";
import { useState } from "react";

export default function OrderCard({ product, price, quantity, updateTotal }) {
  const [curq,setCur] = useState(quantity);

  function onAdd() {
    const newQuantity = curq + 1;
    setCur(newQuantity);
    updateTotal(product, newQuantity);
  }

  function onMinus() {
    if (curq > 0) {
      const newQuantity = curq - 1;
      setCur(newQuantity);
      updateTotal(product, newQuantity);
    }
  }

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div className= {`order-button ${curq === 0 ? "disable" : ""}`} onClick={onMinus}>-</div>
        <h4>{curq}</h4>
        <div className="order-button" onClick={onAdd}>+</div>
      </div>
    </div>
  );
}

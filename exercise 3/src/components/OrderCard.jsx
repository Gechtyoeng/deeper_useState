import React from "react";
import { useState } from "react";

export default function OrderCard({product,price,quantity}) {
  const [curq,setCur] = useState(quantity);

  //handle add button
  function onAdd(){
    let cur = curq +1;
    setCur(cur);
  }
  //handle - button
  function onMinus(){
      let cur = curq - 1;
      setCur(cur);
  }

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div className= {(curq <= 0) ? "order-button disable" : "order-button"} onClick={onMinus}>-</div>
        <h4>{curq}</h4>
        <div className="order-button" onClick={onAdd}>+</div>
      </div>
    </div>
  );
}

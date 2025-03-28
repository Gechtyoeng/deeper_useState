import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";
import { useState } from "react";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

  export default function App() {
    const [orders, setOrders] = useState(ORDERS);
    const [total, setTotal] = useState(() =>
      ORDERS.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    function updateTotal(product, newQuantity) {
      const updatedOrders = orders.map((item) =>
        item.product === product ? { ...item, quantity: newQuantity } : item
      );
      setOrders(updatedOrders);

   // calculate total price
   
   const newTotal = updatedOrders.reduce((sum, item) => sum + item.price * item.quantity, 0);
   setTotal(newTotal);
    }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order) =>(
          <OrderCard 
          key={order.product}
          product={order.product}
          price={order.price}
          quantity={order.quantity}
          updateTotal={updateTotal}></OrderCard>
        )
        )}
        
      </div>

      <CheckoutButton total= {total}></CheckoutButton>
    </>
  );
}

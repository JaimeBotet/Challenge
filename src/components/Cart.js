import React from "react";

import ShoppingCartItem from "./ShoppingCartItem";

import { tshirtDiscount } from "../utils/discounts";
import { voucherPromotion } from "../utils/promotions";

function getTotal(cart) {
  let accum = {
    discount: 0,
    subtotal: 0
  };
  cart.forEach( (item) =>{
    switch(item.code){
      case "TSHIRT":
        accum.discount += tshirtDiscount(item.quantity, item.price);
        break;
      case "VOUCHER":
        accum.discount += voucherPromotion(item.quantity, item.price);
        break;
    }
    accum.subtotal += item.price * item.quantity;
  });

  return accum;
}



function Cart({ cartItems, handleRemove, handleChange }) {
  return (
    <aside className="col col-6 col-lg-4 p-4">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              handleRemove={() => handleRemove(item.id)}
              handleChange={(event) => handleChange(event, item.id)}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h6">SubTotal</h4>
                <h4>
                  <span>{getTotal(cartItems).subtotal}€</span>
                </h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="h6">Discount</h4>
                <h4>
                  <span>{getTotal(cartItems).discount}€</span>
                </h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getTotal(cartItems).subtotal-getTotal(cartItems).discount}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary btn-block btn-lg">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;

# Cofi Challenge Solution Proposal

The solution proposed uses a ReactJS stack, to have a small shop interface where you can select the products you want to add to the shopping cart along with the quantity.
Once in the shopping cart, the algorith implemented by me calculates the discount/promotion to be applied to the products specified in the specs.

The core code to solve the challenge can be found inside _scr/components/Cart_

```tsx
function getTotal(cart) {
  let accum = {
    discount: 0,
    subtotal: 0,
  };
  cart.forEach((item) => {
    switch (item.code) {
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
```

This is a function that introduces inside the html elements some logic interacting with the _cartItems_ state variable, that stores in the Browser LocalStorage the selected items that we have in our shopping cart.

To get the discount of the products of our shopping cart, we loop throught the cart _scanning_ the code of each item:

- if the code is _TSHIRT_ we apply the bulk discount logic, checking if the quantity of selected t-shirts is equal or higher than 3.

```tsx
export const tshirtDiscount = (quantity, price) => {
  // When the ammount is 3 or more the price changes from 20 to 19, that is a discount of 5%
  if (quantity >= 3) return quantity * price * 0.05;
  else return 0;
};
```

- if the code is _VOUCHER_ we apply the voucher promotion logic, grouping by pairs the number of vouchers selected and charging the reminder of a /2 division.

```tsx
export const voucherPromotion = (quantity, price) => {
  // If we have 2 units we just pay 1, so we have 50% discount
  if (quantity % 2 != 1) return quantity * price * 0.5;
  else return (quantity - 1) * price * 0.5;
};
```

Further disccounts can be implemented inside the route _src/utils/discounts.js_ and more promotions can be added inside the route _src/utils/promotions.js_

## External framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preinstalled requirements

To be able to execute successfully this application in a Browser, it is necessary to have installed the latest version of `Node JS`.

Once downloaded the repository, the user should perfom `npm init` in the project folder of this app, and `npm install` to have all the dependencies included in _package.json_ file installed locally in the project folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

## Project Repository

You can find this repository in [Cofi Challenge](https://github.com/facebook/create-react-app).

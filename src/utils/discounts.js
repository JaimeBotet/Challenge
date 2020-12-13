// The CFO insists that the best way to increase sales is with discounts on bulk purchases 
// (buying x or more of a product, the price of that product is reduced), and demands that 
// if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€.

export const voucherDiscount = (quantity, price) => {
    console.log("this is voucher promotion");
}

export const tshirtDiscount = (quantity, price) => {
    // When the ammount is 3 or more the price changes from 20 to 19, that is a discount of 5%
    if(quantity >= 3) return quantity * price * 0.05;
    else return 0;
}

export const mugDiscount = (quantity,price) => {
    console.log("this is mug promotion");
}
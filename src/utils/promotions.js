// - The marketing department believes in 2-for-1 promotions 
// (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on `VOUCHER` items.

export const voucherPromotion = (quantity, price) => {
    // If we have 2 units we just pay 1, so we have 50% discount
    if(quantity % 2 != 1) return quantity * price * 0.5;
    else return (quantity-1) * price * 0.5;
}

export const tshirtPromotion = (quantity, price) => {
    console.log("this is tshirt discount");
}

export const mugPromotion = (quantity, price) => {
    console.log("this is mug discount");
}
class ReceiptItem {

    constructor(cartItem, subtotal = 0, saved = 0) {
        this.cartItem = cartItem;
        this.subtotal = subtotal;
        this.saved = saved;
    }
}
module.exports = ReceiptItem;
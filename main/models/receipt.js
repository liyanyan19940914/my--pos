class Receipt {

    constructor(receiptItems = []) {

        let total = 0;
        let savedTotal = 0;

        for (const receiptItem of receiptItems) {
            total += receiptItem.subtotal;
            savedTotal += receiptItem.saved;
        }

        this.receiptItems = receiptItems;
        this.total = total;
        this.savedTotal = savedTotal;
    }

    buildText() {

        const formatMoney = (money) => {
            return money.toFixed(2);
        };

        let receiptItemsText = this.receiptItems
            .map(receiptItem => {
                return `名称：${receiptItem.getName()}，\
数量：${receiptItem.getCount()}${receiptItem.getUnit()}，\
单价：${formatMoney(receiptItem.getPrice())}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
            })
            .join('\n');

        return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(this.total)}(元)
节省：${formatMoney(this.savedTotal)}(元)
**********************`;
    }

}
module.exports = Receipt;
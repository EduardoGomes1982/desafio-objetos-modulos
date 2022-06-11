export default function Order(code, basic, discount) {
    this.code = code;
    this.basic = basic;
    this.discount = discount;
}

Order.prototype.toString = function() {
    return "Pedido nº = " + this.code + ", Valor = " + this.basic.toFixed(2) + ", Desconto = " + this.discount.toFixed(2);
}
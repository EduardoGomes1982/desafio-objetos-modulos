import Order from "../models/order.js";
import * as orderService from "./../services/order-service.js";

function State() {
    this.order = new Order();
    this.txtOrder = null;
    this.btnShowResult = null;
    this.btnClear = null;
}

const state = new State();

export function init() {
    state.txtOrder = document.querySelector("#txtOrder");
    state.btnShowResult = document.querySelector("#btnShowResult");
    state.btnClear = document.querySelector("#btnClear");

    state.btnShowResult.addEventListener("click", handleBtnShowResultClick);
    state.btnClear.addEventListener("click", handleBtnClearClick);
}

function handleBtnShowResultClick(event) {
    event.preventDefault();
    const vetOrder = state.txtOrder.value.split("\n");
    state.order.code = Number(vetOrder[0]);
    state.order.basic = Number(vetOrder[1]);
    state.order.discount = Number(vetOrder[2]);
    console.log(`Pedido código ${state.order.code}`);
    console.log(`Valor total: R$ ${orderService.total(state.order).toFixed(2)}`);
    console.log(state.order.toString());
}

function handleBtnClearClick(event) {
    event.preventDefault();
    state.txtOrder.value = "";
}
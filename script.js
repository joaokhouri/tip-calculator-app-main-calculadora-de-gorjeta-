//botões grid
const btn5 = document.getElementById("5"); // botão 5%
const btn10 = document.getElementById("10"); // botão 10%
const btn15 = document.getElementById("15"); // botão 15%
const btn25 = document.getElementById("25"); // botão 25%
const btn50 = document.getElementById("50"); // botão 50%
//botões grid
//valores resultados
const amount = document.getElementById("tip-amount"); // tip amount
const total = document.getElementById("total"); // total
const reset = document.getElementById("reset"); // reset
//funções dos botões
//5%
function fiveperc() {
  let bill = document.getElementById("bill").value; //valor da conta
  let people = document.getElementById("people").value; //quantidade de pessoas
  let tip = (bill / 100) * 5;
  let tipPeople = Math.round(tip / people);
  let totalPerson = Math.round(bill / people + tipPeople);
  document.getElementById("tip-amount").innerHTML = `$ ${tipPeople}`;
  document.getElementById("total").innerHTML = `$ ${totalPerson}`;
}
//10%
function tenperc() {
  let bill = document.getElementById("bill").value; //valor da conta
  let people = document.getElementById("people").value; //quantidade de pessoas
  let tip = (bill / 100) * 10;
  let tipPeople = Math.round(tip / people);
  let totalPerson = Math.round(bill / people + tipPeople);
  document.getElementById("tip-amount").innerHTML = `$ ${tipPeople}`;
  document.getElementById("total").innerHTML = `$ ${totalPerson}`;
}
//15%
function fiftperc() {
  let bill = document.getElementById("bill").value; //valor da conta
  let people = document.getElementById("people").value; //quantidade de pessoas
  let tip = (bill / 100) * 15;
  let tipPeople = Math.round(tip / people);
  let totalPerson = Math.round(bill / people + tipPeople);
  document.getElementById("tip-amount").innerHTML = `$ ${tipPeople}`;
  document.getElementById("total").innerHTML = `$ ${totalPerson}`;
}
//25%
function twfperc() {
  let bill = document.getElementById("bill").value; //valor da conta
  let people = document.getElementById("people").value; //quantidade de pessoas
  let tip = (bill / 100) * 25;
  let tipPeople = Math.round(tip / people);
  let totalPerson = Math.round(bill / people + tipPeople);
  document.getElementById("tip-amount").innerHTML = `$ ${tipPeople}`;
  document.getElementById("total").innerHTML = `$ ${totalPerson}`;
}
//50%
function fiftyperc() {
  let bill = document.getElementById("bill").value; //valor da conta
  let people = document.getElementById("people").value; //quantidade de pessoas
  let tip = (bill / 100) * 50;
  let tipPeople = Math.round(tip / people);
  let totalPerson = Math.round(bill / people + tipPeople);
  document.getElementById("tip-amount").innerHTML = `$ ${tipPeople}`;
  document.getElementById("total").innerHTML = `$ ${totalPerson}`;
}
//custom
function customperc() {
  let bill = document.getElementById("bill").value; //valor da conta
  let people = document.getElementById("people").value; //quantidade de pessoas
  let tip = (bill / 100) * 50;
  let tipPeople = Math.round(tip / people);
  let totalPerson = Math.round(bill / people + tipPeople);
  document.getElementById("tip-amount").innerHTML = `$ ${tipPeople}`;
  document.getElementById("total").innerHTML = `$ ${totalPerson}`;
}

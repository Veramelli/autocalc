"use strict";

let sum = 0;
const camaroImg = "./assets/img/Chevrolet-Camaro.png";
const corvetImg = "./assets/img/Chevrolet-Corvette-Z06.png";
const stringrayImg = "./assets/img/stringrayCorvette.png";
const gt350Img = "./assets/img/Shelby-GT350.png";
const gt500Img = "./assets/img/Shelby-GT500.png";
const caymanImg = "./assets/img/cayman.png";
const boxterImg = "./assets/img/Boxter.png";
const turboSImg = "./assets/img/turboS.png";
const model = document.querySelector(".models");
const modelChevrolet = document.querySelector(".chevrolet");
const modelMustang = document.querySelector(".fordMustang");
const modelPorshe = document.querySelector(".porshe");

function changeModel() {
  const chevrolet = document.querySelector(".chevrolet");
  const fordMustang = document.querySelector(".fordMustang");
  const porshe = document.querySelector(".porshe");

  chevrolet.style.display = "none";
  fordMustang.style.display = "none";
  porshe.style.display = "none";

  if (model.value === "chevrolet") chevrolet.style.display = "block";
  if (model.value === "fordMustang") fordMustang.style.display = "block";
  if (model.value === "porshe") porshe.style.display = "block";
}

function changeChevrolet() {
  const carImage = document.querySelector(".carImage");

  carImage.src = "";

  if (modelChevrolet.value === "camaro") {
    carImage.src = camaroImg;
  }
  if (modelChevrolet.value === "corveteZ06") {
    carImage.src = corvetImg;
  }
  if (modelChevrolet.value === "corvetteStingray") {
    carImage.src = stringrayImg;
  }
}

function changeMustang() {
  const carImage = document.querySelector(".carImage");

  carImage.src = "";

  if (modelMustang.value === "GT350") {
    carImage.src = gt350Img;
  }
  if (modelMustang.value === "GT500") {
    carImage.src = gt500Img;
  }
}

function changePorshe() {
  const carImage = document.querySelector(".carImage");

  carImage.src = "";

  if (modelPorshe.value === "caimanGT4") {
    carImage.src = caymanImg;
  }
  if (modelPorshe.value === "boxter") {
    carImage.src = boxterImg;
  }
  if (modelPorshe.value === "turboS") {
    carImage.src = turboSImg;
  }
}

function getQtyOwners() {
  const oldState = document.querySelector(".oldState").checked;
  const owners = document.querySelector(".owners");
  if (oldState) {
    owners.style.display = "block";
  }
}

const chevrolet = document.forms.calcForm.chevrolet;
const fordMustang = document.forms.calcForm.fordMustang;
const porshe = document.forms.calcForm.porshe;

function calcSum() {
  sum = 0;
  const diselFuel = document.querySelector(".diselfuel").checked;
  if (chevrolet.value == "camaro") sum += 50000;
  if (chevrolet.value == "corveteZ06") sum += 60000;
  if (chevrolet.value == "corvetteStingray") sum += 65000;
  if (fordMustang.value == "GT350") sum += 68000;
  if (fordMustang.value == "GT500") sum += 70000;
  if (porshe.value == "caimanGT4") sum += 75000;
  if (porshe.value == "boxter") sum += 80000;
  if (porshe.value == "turboS") sum += 90000;

  if (diselFuel) sum += 70000;
  const gasFuel = document.querySelector(".gasfuel").checked;
  if (gasFuel) sum += 100000;
  const electroFuel = document.querySelector(".electrofuel").checked;
  if (electroFuel) sum += 400000;
  const oldState = document.querySelector(".oldState").checked;
  if (oldState) sum -= (sum * 20) / 100;
  const ownersThree = document.querySelector(".ownersThree").checked;
  if (ownersThree) sum -= (sum * 10) / 100;
  const payTypeCash = document.querySelector(".payType__cash").checked;
  if (payTypeCash) sum -= (sum * 2) / 100;

  document.querySelector(".total").innerHTML = `${sum} &euro; `;
}

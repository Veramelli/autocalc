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

function changeModel() {
  const model = document.querySelector(".models").value;
  const chevrolet = document.querySelector(".chevrolet");
  const fordMustang = document.querySelector(".fordMustang");
  const porshe = document.querySelector(".porshe");

  chevrolet.style.display = "none";
  fordMustang.style.display = "none";
  porshe.style.display = "none";

  if (model === "chevrolet") chevrolet.style.display = "block";
  if (model === "fordMustang") fordMustang.style.display = "block";
  if (model === "porshe") porshe.style.display = "block";
}

function changeChevrolet() {
  const modelChevrolet = document.querySelector(".chevrolet").value;
  const carImage = document.querySelector(".carImage");

  carImage.src = "";
  sum = 0;

  if (modelChevrolet === "camaro") {
    carImage.src = camaroImg;
    sum += 1000000;
  }
  if (modelChevrolet === "corveteZ06") {
    carImage.src = corvetImg;
    sum += 1200000;
  }
  if (modelChevrolet === "corvetteStingray") {
    carImage.src = stringrayImg;
    sum += 1700000;
  }
}

function changeMustang() {
  const modelMustang = document.querySelector(".fordMustang").value;
  const carImage = document.querySelector(".carImage");

  carImage.src = "";
  sum = 0;

  if (modelMustang === "GT350") {
    carImage.src = gt350Img;
    sum += 5000000;
  }
  if (modelMustang === "GT500") {
    carImage.src = gt500Img;
    sum += 6000000;
  }
}

function changePorshe() {
  const modelPorshe = document.querySelector(".porshe").value;
  const carImage = document.querySelector(".carImage");

  carImage.src = "";
  sum = 0;

  if (modelPorshe === "caimanGT4") {
    carImage.src = caymanImg;
    sum += 6500000;
  }
  if (modelPorshe === "boxter") {
    carImage.src = boxterImg;
    sum += 7500000;
  }
  if (modelPorshe === "turboS") {
    carImage.src = turboSImg;
    sum += 8000000;
  }
}

function getQtyOwners() {
  const oldState = document.querySelector(".oldState").checked;
  const owners = document.querySelector(".owners");
  if (oldState) {
    owners.style.display = "block";
  }
}

function calcSum() {
  const diselFuel = document.querySelector(".diselfuel").checked;
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

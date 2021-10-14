const langSwitcher = document.querySelector("#language-switcher");

langSwitcher.addEventListener("click", function () {
  if (langSwitcher.classList.contains("show")) {
    langSwitcher.classList.toggle("show-items");
    setTimeout(function () {
      langSwitcher.classList.toggle("show");
    }, 100);
  } else {
    langSwitcher.classList.toggle("show");
    setTimeout(function () {
      langSwitcher.classList.toggle("show-items");
    }, 100);
  }
});

const tailleM = document.querySelector(".M");
tailleM.addEventListener("click", () => {
  selection();
  selectionM();
});
const tailleL = document.querySelector(".L");
tailleL.addEventListener("click", () => {
  selection();
  selectionL();
});
const tailleG = document.querySelector(".G");
tailleG.addEventListener("click", () => {
  selection();
  selectionG();
});

const btnRanking = document.querySelector(".btn-ranking");
btnRanking.addEventListener("click", () => {
  const votreTacosM = document.querySelector(".selectionM");
  const votreTacosL = document.querySelector(".selectionL");
  const votreTacosG = document.querySelector(".selectionG");
  if (votreTacosM === null && votreTacosL === null && votreTacosG === null) {
    alert("Veuillez séléctionner votre taille de Tacos !");
  } else {
    btnRanking.style.display = "none";
    const tagline = document.querySelector(".tagline");
    tagline.innerHTML = "";
    panier();
  }
});

//////////////////////////////////////////////////////
//                       GOUDA                      //
//////////////////////////////////////////////////////
const digit1 = document.querySelector("#Digit1");

digit1.addEventListener("mouseover", () => {
  digit1.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit1.innerHTML = `<img alt="Gouda" draggable="false" src="/soundboard/images/gouda_thumb.png"/>`;
  }, 300);
});

digit1.addEventListener("click", showItem1);
function showItem1() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng1();
}

//////////////////////////////////////////////////////
//                 OIGNONS CARAMELISEES             //
//////////////////////////////////////////////////////
const digit2 = document.querySelector("#Digit2");

digit2.addEventListener("mouseover", () => {
  digit2.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit2.innerHTML = `<img alt="Oignons caramélisés" draggable="false" src="/soundboard/images/caramelized-onions_thumb.png"/>`;
  }, 300);
});

digit2.addEventListener("click", showItem2);
function showItem2() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng2();
}

//////////////////////////////////////////////////////
//                 LARDONS DE VOLAILLE              //
//////////////////////////////////////////////////////
const digit3 = document.querySelector("#Digit3");

digit3.addEventListener("mouseover", () => {
  digit3.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit3.innerHTML = `<img alt="Lardons de volaille" draggable="false" src="/soundboard/images/chicken-bacon_thumb.png"/>`;
  }, 300);
});

digit3.addEventListener("click", showItem3);
function showItem3() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng3();
}

//////////////////////////////////////////////////////
//                    CORDON BLEU                   //
//////////////////////////////////////////////////////
const digit4 = document.querySelector("#Digit4");

digit4.addEventListener("mouseover", () => {
  digit4.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit4.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/cordon-blue_thumb.png"/>`;
  }, 300);
});

digit4.addEventListener("click", showItem4);
function showItem4() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng4();
}

//////////////////////////////////////////////////////
//                    PASTRAMI                      //
//////////////////////////////////////////////////////
const digit5 = document.querySelector("#Digit5");

digit5.addEventListener("mouseover", () => {
  digit5.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit5.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/pastrami_thumb.png"/>`;
  }, 300);
});

digit5.addEventListener("click", showItem5);
function showItem5() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng5();
}

//////////////////////////////////////////////////////
//                    POIVRONNADE                      //
//////////////////////////////////////////////////////
const digit6 = document.querySelector("#Digit6");

digit6.addEventListener("mouseover", () => {
  digit6.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit6.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/paprika_thumb.png"/>`;
  }, 300);
});

digit6.addEventListener("click", showItem6);
function showItem6() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng6();
}

//////////////////////////////////////////////////////
//                 VACHE QUI RIT                    //
//////////////////////////////////////////////////////
const digit7 = document.querySelector("#Digit7");

digit7.addEventListener("mouseover", () => {
  digit7.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit7.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/vache-qui-rit_thumb.png"/>`;
  }, 300);
});

digit7.addEventListener("click", showItem7);
function showItem7() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng7();
}

//////////////////////////////////////////////////////
//                   frit'otacos                    //
//////////////////////////////////////////////////////
const digit8 = document.querySelector("#Digit8");

digit8.addEventListener("mouseover", () => {
  digit8.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit8.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/fries-otacos_thumb.png"/>`;
  }, 300);
});

digit8.addEventListener("click", showItem8);
function showItem8() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng8();
}

//////////////////////////////////////////////////////
//              frites barquette                    //
//////////////////////////////////////////////////////
const digit9 = document.querySelector("#Digit9");

digit9.addEventListener("mouseover", () => {
  digit9.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit9.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/fries_thumb.png"/>`;
  }, 300);
});

digit9.addEventListener("click", showItem9);
function showItem9() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng9();
}

//////////////////////////////////////////////////////
//                       nuggets                    //
//////////////////////////////////////////////////////
const digit0 = document.querySelector("#Digit0");

digit0.addEventListener("mouseover", () => {
  digit0.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    digit0.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/nuggets_thumb.png"/>`;
  }, 300);
});

digit0.addEventListener("click", showItem0);
function showItem0() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIng0();
}

//////////////////////////////////////////////////////
//                       boursin                    //
//////////////////////////////////////////////////////
const KeyQ = document.querySelector("#KeyQ");

KeyQ.addEventListener("mouseover", () => {
  KeyQ.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    KeyQ.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/boursin_thumb.png"/>`;
  }, 300);
});

KeyQ.addEventListener("click", showItemKeyQ);
function showItemKeyQ() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIngKeyQ();
}

//////////////////////////////////////////////////////
//                       coca-cola                  //
//////////////////////////////////////////////////////
const KeyW = document.querySelector("#KeyW");

KeyW.addEventListener("mouseover", () => {
  KeyW.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    KeyW.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/coca-cola_thumb.png"/>`;
  }, 300);
});

KeyW.addEventListener("click", showItemKeyW);
function showItemKeyW() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIngKeyW();
}

//////////////////////////////////////////////////////
//                       Keychup                    //
//////////////////////////////////////////////////////
const KeyE = document.querySelector("#KeyE");

KeyE.addEventListener("mouseover", () => {
  KeyE.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    KeyE.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/ketchup_thumb.png"/>`;
  }, 300);
});

KeyE.addEventListener("click", showItemKeyE);
function showItemKeyE() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIngKeyE();
}

//////////////////////////////////////////////////////
//                       Fanta                      //
//////////////////////////////////////////////////////
const KeyR = document.querySelector("#KeyR");

KeyR.addEventListener("mouseover", () => {
  KeyR.innerHTML = `<div class="hover">Ajouter au panier</div>`;
  setTimeout(function () {
    KeyR.innerHTML = `<img alt="Cordon bleu" draggable="false" src="/soundboard/images/fanta_thumb.png"/>`;
  }, 300);
});

KeyR.addEventListener("click", showItemKeyR);
function showItemKeyR() {
  const showing = document.querySelector(".placement-style");
  showing.classList.add("ingredients");
  showIngKeyR();
}

import {
  showIng1,
  showIng2,
  showIng3,
  showIng4,
  showIng5,
  showIng6,
  showIng7,
  showIng8,
  showIng9,
  showIng0,
  showIngKeyQ,
  showIngKeyW,
  showIngKeyE,
  showIngKeyR,
  panier,
  selection,
  selectionM,
  selectionL,
  selectionG,
} from "./fonction.js";

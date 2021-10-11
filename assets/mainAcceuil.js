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

/*const digit2 = document.querySelectorAll(".Digit2");
const digit3 = document.querySelectorAll(".Digit3");
const digit4 = document.querySelectorAll(".Digit4");
const digit5 = document.querySelectorAll(".Digit5");
const digit6 = document.querySelectorAll(".Digit6");
const digit7 = document.querySelectorAll(".Digit7");
const digit8 = document.querySelectorAll(".Digit8");
const digit9 = document.querySelectorAll(".Digit9");
const digit0 = document.querySelectorAll(".Digit0");
const keyQ = document.querySelectorAll(".KeyQ");
const keyW = document.querySelectorAll(".KeyW");
const keyE = document.querySelectorAll(".KeyE");
const keyR = document.querySelectorAll(".KeyR");
const keyT = document.querySelectorAll(".KeyT");
const keyY = document.querySelectorAll(".KeyY");
const keyU = document.querySelectorAll(".KeyU");
const keyI = document.querySelectorAll(".KeyI");
const keyO = document.querySelectorAll(".KeyO");
const keyP = document.querySelectorAll(".KeyP");
const keyA = document.querySelectorAll(".KeyA");
const keyS = document.querySelectorAll(".KeyS");
const keyD = document.querySelectorAll(".KeyD");
const keyF = document.querySelectorAll(".KeyF");
const keyG = document.querySelectorAll(".KeyG");
const keyH = document.querySelectorAll(".KeyH");
const keyJ = document.querySelectorAll(".KeyJ");
const keyL = document.querySelectorAll(".KeyL");
const semicolon = document.querySelectorAll(".Semicolon");
const keyZ = document.querySelectorAll(".KeyZ");
const keyX = document.querySelectorAll(".KeyX");
const keyC = document.querySelectorAll(".KeyC");
const keyV = document.querySelectorAll(".KeyV");
const keyB = document.querySelectorAll(".KeyB");
const keyN = document.querySelectorAll(".KeyN");
const keyM = document.querySelectorAll(".KeyM");
const comma = document.querySelectorAll(".Comma");
const period = document.querySelectorAll(".Period");
const space = document.querySelectorAll(".Space");*/

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
} from "./fonction.js";

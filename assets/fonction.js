function affiche(ingredient) {
  const showing = document.querySelector(".placement-style");
  showing.innerHTML += `
  <img class="logo-style" src="/assets/img-general/logo-new.png" />
  <div class="text-style">${ingredient.name}</div>
  <div class="text-style">${ingredient.price} NIS</div>
  <img class="image-style" src="/soundboard/images/${ingredient.photo}" />
  <img class="fond-ecran" src="/assets/lightgrey-skyline.png" />
  <button class="btn-panier">Ajouter au panier</button>`;
  const btn = document.querySelector(".btn-panier");
  btn.addEventListener("click", function () {
    showing.classList.remove("ingredients");
    const produitDivM = document.querySelector(".selectionM");
    const produitDivL = document.querySelector(".selectionL");
    const produitDivG = document.querySelector(".selectionG");
    if (produitDivM === null && produitDivL === null && produitDivG === null) {
      alert("Veuillez d'abord séléctionner votre taille de Tacos !");
    }
    if (produitDivM != null) {
      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(
          newNode,
          referenceNode.nextSibling
        );
      }
      const produit = document.createElement("div");
      produit.innerHTML = `<img alt="Boursin®" draggable="false" src="/soundboard/images/boursin_thumb.png">`;
      insertAfter(produitDivM, produit);
    }
    if (produitDivL != null) {
      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(
          newNode,
          referenceNode.nextSibling
        );
      }
      const produit = document.createElement("div");
      produit.innerHTML = `<img alt="Boursin®" draggable="false" src="/soundboard/images/boursin_thumb.png">`;
      insertAfter(produitDivL, produit);
    }
    if (produitDivG != null) {
      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(
          newNode,
          referenceNode.nextSibling
        );
      }
      const produit = document.createElement("div");
      produit.innerHTML = `<img alt="Boursin®" draggable="false" src="/soundboard/images/boursin_thumb.png">`;
      insertAfter(produitDivG, produit);
    }
  });
  showing.addEventListener("click", function () {
    showing.classList.remove("ingredients");
    showing.innerHTML = ``;
  });
}

function selection() {
  const choixTaille = document.querySelector(".control");
  choixTaille.innerHTML = "";
  choixTaille.innerHTML += `
  <div
    class="
      d-flex
      w-100
      flex-grow-1
      justify-center
      align-items-center
      bg-black-clear
    "
  >
    <span class="color-primary"
      >Très bien ! maintenant faites votre séléction d'ingredients</span
    >
  </div>`;
}

function panier() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  const votreTacos = document.createElement("h3");
  votreTacos.innerHTML = "VOTRE TACOS";
  votreTacos.classList.add("flex-grow-1");
  votreTacos.classList.add("d-flex");
  votreTacos.classList.add("justify-center");
  votreTacos.classList.add("color");
  const alignSelfCenter = document.querySelector(".align-self-center");
  insertAfter(alignSelfCenter, votreTacos);
  const keyboardInput = document.querySelector(".keyboard-input-view");
  keyboardInput.innerHTML = "";
  const choixTaille = document.querySelector(".control");
  choixTaille.innerHTML = "";
  choixTaille.classList.remove("d-flex");
  choixTaille.classList.remove("flex-column");
  choixTaille.classList.remove("justify-content-end");
  choixTaille.classList.remove("control");
  choixTaille.classList.remove("controls-block");
  const votreTacosM = document.querySelector(".selectionM");
  if (votreTacosM != null) {
    votreTacosM.innerHTML = "TACOS TAILLE MEDIUM";
    votreTacosM.classList.add("color-primary");
    votreTacosM.classList.add("produit");
  }
  const votreTacosL = document.querySelector(".selectionL");
  if (votreTacosL != null) {
    votreTacosL.innerHTML = "TACOS TAILLE LARGE";
    votreTacosL.classList.add("color-primary");
    votreTacosL.classList.add("produit");
  }
  const votreTacosG = document.querySelector(".selectionG");
  if (votreTacosG != null) {
    votreTacosG.innerHTML = "GIGA TACOS";
    votreTacosG.classList.add("color-primary");
    votreTacosG.classList.add("produit");
  }
}

function selectionM() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  const votreTacos = document.createElement("h3");
  votreTacos.innerHTML = "";
  votreTacos.classList.add("flex-grow-1");
  votreTacos.classList.add("d-flex");
  votreTacos.classList.add("justify-center");
  votreTacos.classList.add("color");
  const alignSelfCenter = document.querySelector(".align-self-center");
  insertAfter(alignSelfCenter, votreTacos);
  votreTacos.classList.add("selectionM");
}

function selectionL() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  const votreTacos = document.createElement("h3");
  votreTacos.innerHTML = "";
  votreTacos.classList.add("flex-grow-1");
  votreTacos.classList.add("d-flex");
  votreTacos.classList.add("justify-center");
  votreTacos.classList.add("color");
  votreTacos.classList.add("selectionL");
  const alignSelfCenter = document.querySelector(".align-self-center");
  insertAfter(alignSelfCenter, votreTacos);
}

function selectionG() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  const votreTacos = document.createElement("h3");
  votreTacos.innerHTML = "";
  votreTacos.classList.add("flex-grow-1");
  votreTacos.classList.add("d-flex");
  votreTacos.classList.add("justify-center");
  votreTacos.classList.add("color");
  votreTacos.classList.add("selectionG");
  const alignSelfCenter = document.querySelector(".align-self-center");
  insertAfter(alignSelfCenter, votreTacos);
}

function showIng1() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit1 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit1"
      );
      affiche(Digit1);
    });
}

function showIng2() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit2 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit2"
      );
      affiche(Digit2);
    });
}

function showIng3() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit3 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit3"
      );
      affiche(Digit3);
    });
}

function showIng4() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit4 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit4"
      );
      affiche(Digit4);
    });
}

function showIng5() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit5 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit5"
      );
      affiche(Digit5);
    });
}

function showIng6() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit6 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit6"
      );
      affiche(Digit6);
    });
}

function showIng7() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit7 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit7"
      );
      affiche(Digit7);
    });
}

function showIng8() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit8 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit8"
      );
      affiche(Digit8);
    });
}

function showIng9() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit9 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit9"
      );
      affiche(Digit9);
    });
}

function showIng0() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const Digit0 = data.ingredients.find(
        (ingredient) => ingredient.id == "Digit0"
      );
      affiche(Digit0);
    });
}

function showIngKeyQ() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const KeyQ = data.ingredients.find(
        (ingredient) => ingredient.id == "KeyQ"
      );
      affiche(KeyQ);
    });
}

function showIngKeyW() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const KeyW = data.ingredients.find(
        (ingredient) => ingredient.id == "KeyW"
      );
      affiche(KeyW);
    });
}

function showIngKeyE() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const KeyE = data.ingredients.find(
        (ingredient) => ingredient.id == "KeyE"
      );
      affiche(KeyE);
    });
}

function showIngKeyR() {
  fetch("/assets/data.json")
    .then((res) => res.json())
    .then((data) => {
      const KeyR = data.ingredients.find(
        (ingredient) => ingredient.id == "KeyR"
      );
      affiche(KeyR);
    });
}
export {
  affiche,
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
};

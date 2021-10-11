function affiche(ingredient) {
  const showing = document.querySelector(".placement-style");
  showing.innerHTML += `
  <img class="logo-style" src="/assets/img-general/logo-new.png" />
  <div class="text-style">${ingredient.name}</div>
  <img class="image-style" src="/soundboard/images/${ingredient.photo}" />
  <img class="fond-ecran" src="/assets/lightgrey-skyline.png" />
  <button class="btn-panier">Ajouter au panier</button>`;
  const btn = document.querySelector(".btn-panier");
  btn.addEventListener("click", function () {
    showing.classList.remove("ingredients");
    showing.innerHTML = ``;
  });
  showing.addEventListener("click", function () {
    showing.classList.remove("ingredients");
    showing.innerHTML = ``;
  });
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
};

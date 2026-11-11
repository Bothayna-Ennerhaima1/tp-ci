function addition(a, b) {
  return a + b;
}

function estPair(nombre) {
  return nombre % 2 === 0;
}

function maximum(tableau) {
  return Math.max(...tableau);
}

function inverser(texte) {
  return texte.split("").reverse().join("");
}

function factorielle(n) {
  if (n < 0) {
    throw new Error("n doit être positif");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorielle(n - 1);
}

module.exports = { addition, estPair, maximum, inverser, factorielle };
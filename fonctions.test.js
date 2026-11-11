const {
  addition,
  estPair,
  maximum,
  inverser,
  factorielle,
} = require("./fonctions");

describe("addition", () => {
  test("2 + 3 = 5", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("fonctionne avec des négatifs", () => {
    expect(addition(-4, 1)).toBe(-3);
  });
});

describe("estPair", () => {
  test("4 est pair", () => {
    expect(estPair(4)).toBe(true);
  });

  test("7 n'est pas pair", () => {
    expect(estPair(7)).toBe(false);
  });
});

describe("maximum", () => {
  test("trouve le plus grand nombre", () => {
    expect(maximum([3, 9, 2, 7])).toBe(9);
  });
});

describe("inverser", () => {
  test("inverse un mot", () => {
    expect(inverser("bonjour")).toBe("ruojnob");
  });
});

describe("factorielle", () => {
  test("5! = 120", () => {
    expect(factorielle(5)).toBe(120);
  });

  test("0! = 1", () => {
    expect(factorielle(0)).toBe(1);
  });

  test("lance une erreur pour un nombre négatif", () => {
    expect(() => factorielle(-1)).toThrow();
  });
});
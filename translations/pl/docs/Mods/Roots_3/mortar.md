### Klasa

```zenscript
importuj mods.roots.Mortar;
```

#### Metody

```zenscript
Uniknij addRecipe(
  IItemStack, // element wyjściowy tego przepisu
  IIngredient[] wejścia // tablicę składników, które są 5 długie lub 1 długie
);
```

* * *

```zenscript
Unieważnienie changeSpell(
  pisownia znaków, // nazwa pisowni jak w rejestrze pisowni
  IIngredient[] wejścia // tablicę 5 elementów, które są nowymi składnikami przepisu
);
```

* * *

```zenscript
Unieważnij usunięciePrzepis(
  IItemStack wyjście // stos przedmiotów wytworzony przez przepis
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots. ortopedyczne;

// Dodaje przepis, który sprawia, że proch działa z krzemienia
// Jako że przepis ma tylko jeden wkład, automatycznie
// wygeneruje 5 przepisów, zwiększając liczbę wejść i
// ilość danych wyjściowych.
Motar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// Ta receptura używa pięciu składników, aby utworzyć jedno łóżko.
Moździerz. ddRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// To usunie wszystkie przepisy, które mają mąkę korzeniową jako wynik
// wraz z wszelkimi przepisami wieloskładnikowymi
Moździerz. emoveRecipe(<roots:flour>);

// To zmieni przepis na pisownię suplikacji gajów na
// po prostu wymaga pięciu kawałków cukru.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```
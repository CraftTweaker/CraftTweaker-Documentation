### Klasa

```zenscript
importuj mods.roots.Fey;
```

#### Metody

```zenscript
Unieważnij przepis(
  nazwy ciągu, // nazwy przepisu; jeśli zastąpi istniejący przepis, należy użyć tej samej nazwy, aby zapewnić ciągłość Patchouli
  wyjście IItemStack, // stos przedmiotów wytworzony przez ten przepis
  ISkładnika[] wejścia // / tablicę ISkładników, które stanowią przepis; musi zawierać 5 pozycji
);
```

* * *

```zenscript
Unieważnij przepis(
  nazwy ciągu, // nazwy przepisu; jeśli zastąpi istniejący przepis, należy użyć tej samej nazwy, aby zapewnić ciągłość Patchouli
  wyjście IItemStack, // stos przedmiotów wytworzony przez ten przepis
  Wejścia ISkładnika[] , // tablicę ISkładników składających się na przepis; musi zawierać 5 przedmiotów
  int xp // ilość xp (w poziomach), aby nagrodzić gracza za tworzenie tego przepisu
);
```

* * *

```zenscript
Unieważnij przepis usunięty(
  IItemStack wyjście // element wytworzony przez przepis, który chcesz usunąć
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots.Fey;

// Dodaje przepis na TNT używając 4 pistoletów i czerwonej wełny
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Dodaje powyższy przepis, ale także zapewnia graczowi 6 poziomów (od 0-6 relatywnie) za każdym razem, gdy jest tworzony
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Usuwa przepis na żywą siekierę
Opłata. emoveRecipe(<roots:living_axe>);

// Dodaje inny przepis na żywą siekierę, używając tej samej nazwy, aby upewnić się, że pojawia się w Patchouli. Domyślnie wszystkie nazwy receptury Fey są takie same jak nazwa rejestru przedmiotu.
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### Uwagi

Dla ciągłości Patchouli ważne jest, aby jeśli usuniesz domyślny przepis (powiedz `living_axe`), czy zamienisz go na inny przepis i nadaj mu nazwę `"living_axe"` jeśli chcesz, aby Patchouli prawidłowo wyświetlał nowy przepis.
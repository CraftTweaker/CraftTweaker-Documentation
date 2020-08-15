### Klasa

```zenscript
importuj mods.roots.Pyre;
```

#### Metody

```zenscript
Unieważnij przepis(
  nazwa ciągu, // nazwa dodawanego przepisu; jeśli zastąpi istniejący przepis na grę, upewnij się, że używana jest prawidłowa nazwa
  wyjście IItemStack, // wyjście tego przepisu
  ISkładnik [] wejścia // lista pięciu składników (nie mniej)
);
```

* * *

```zenscript
Unieważnij przepis(
  nazwa ciągu, // nazwa dodawanego przepisu; jeśli zastąpi istniejący przepis na grę, upewnij się, że używana jest prawidłowa nazwa
  wyjście IItemStack, // wyjście tego przepisu
  Wejścia ISkładnika[] // lista pięciu składników
  int xp // ilość xp na poziomach przyznawanych po utworzeniu
);
```

* * *

```zenscript
usuń przepis(
  IItemStack wyjście // wyjście przepisu do usunięcia
);
```

* * *

### Przykłady

```zenscript
import mods.roots.Pyre;

// Usuwa przepis na stalicripe; pamiętaj, że ilość nie jest uważana za
// podczas sprawdzania, czy przepis pasuje.
Pyre.removeRecipe(<roots:stalicripe>);

// Ponownie dodaje stalicripe za pomocą przepisu dodatkowego, który nie daje XP,
// ale z znacznie większą ilością
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// Jak wyżej, ale nagradzając 30 poziomów doświadczenia (obliczonych na poziomie 0)
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Uwagi

Niezwykle ważne jest zastąpienie przepisów w celu zapewnienia, że nazwa receptury jest taka sama, że Patchouli poprawnie zgłasza poprawny przepis na wytwarzanie podstawowych przedmiotów.

Dla wszystkich innych przedmiotów, użyj nazwy opisującej to, co robi Twój przepis.
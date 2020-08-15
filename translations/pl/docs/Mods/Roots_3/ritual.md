### Klasa

```zenscript
importuj mods.roots.rytual;
```

#### Metody

```zenscript
unieważnienie modifyRitual(
  nazwa ciągu, // nazwa rytuału, którego składniki chcesz zmodyfikować
  IIngredient[] wejścia // lista pięciu składników (nie więcej niż nie mniej niż
);
```

* * *

### Przykłady

```zenscript
import mods.roots.rytual;

// Zmienia składniki wymagane do wykonania rytuału wiatdwall
rytual. odifyRitual("rytual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```
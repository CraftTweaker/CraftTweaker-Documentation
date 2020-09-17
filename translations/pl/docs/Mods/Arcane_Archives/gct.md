### Klasa

```zenscript
import mods.arcanearchives.GCT;
```

#### Metody

```zenscript
Unieważnij przepis(
  nazwa ciągu, // nazwa przepisu
  wyjście IItemStack, // wyjście jako element
  ISkładnik [] wejścia // wejścia jako tablicę składników
);
```

* * *

```zenscript
Unieważnij usunięcieRecype(
  IItemStack wyjście // wyjściowy stos do usunięcia (ilość musi się zgadzać)
);
```

* * *

```zenscript
unieważnienie zastępujące eRecipe(
  nazwa ciągu, // nazwa receptury (musi już istnieć)
  Wyjście IItemStack // wyjście jako element
  ISkładnik [] wejścia // wejścia jako tablicę składników
);
```

* * *

### Przykłady

```zenscript
import mods.arcanearchives.GCT;

// Usuwa przepis na promienny pył
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Dodaje nowy przepis na promienny pył
GCT. ddRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Zastępuje promienną recepturę kwarcową bez zakłócania ekranu GCT
GCT. eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```
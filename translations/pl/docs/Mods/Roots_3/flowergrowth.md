### Klasa

```zenscript
importuj mods.roots.FlowerGrowth;
```

#### Metody

```zenscript
Unieważnij usunięcie przepisu(
  nazwa ciągu // nazwa przepisu, który chcesz usunąć
);
```

* * *

```zenscript
Unieważnij addRecipeBlockState(
  nazwa ciągu, // Nazwa przepisu, który dodajesz
  Stan stanu IBlockState // Stan bloku kwiatu
);
```

* * *

```zenscript
Unieważnij addRecipeBlock(
  nazwa ciągu, // nazwa przepisu, który dodajesz
  blok IBlock, // Blok kwiatu, który ma być umieszczony
  meta // meta stanu bloku kwiatu
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots.FlowerGrowth;

// Usuwa domyślny przepis na dandelion
FlowerGrowth.removeRecipe("dandelion");

// Dodaje biały kwiat Botaniczny z blokiem
FlowerGrowth. ddRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Dodaje kwiat Botania z blokiem + meta
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Uwagi

Obecnie nieprzetestowane z podwójnie wysokimi kwiatami.
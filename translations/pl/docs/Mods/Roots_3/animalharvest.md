### Klasa

```zenscript
importuj mods.roots.AnimalHarvest;
```

#### Metody

```zenscript
Unieważnij addEntity(
  IEntityDefinition entity // the entity to create drops for
);
```

* * *

```zenscript
Unieważnij removeEntity(
  IEntityDefinition entity // the entity to stop generating drops for
);
```

* * *

```zenscript
Unieważnij addFish(
  nazwa ciągu, // nazwa typu ryby
  IItemStack, // typ ryb jako stos przedmiotów
  int waga // masa ryb jako liczba całkowita
);
```

* * *

```zenscript
Unieważnij removeFish(
  IItemStack ryba // typ ryby do usunięcia jako stos przedmiotów
);
```

* * *

### Przykłady

```zenscript
import mods.roots.AnimalHarvest;

// Dodaje endermana jako cel rytuału zbiorów zwierząt.
// Generalnie lepiej byłoby wykorzystywać zwierzęta.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Zapobiega oddawaniu spadków podczas rytuału
Zwierzęta. emoveEntity(<entity:minecraft:cow>);

// Dodaje magma krem jako rodzaj ryb o wadze 20 (wszystkie wagi oparte na 
// standardowym połowie. syn loot table)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Usuwa pufferryty z rytuału zbiorów zwierząt
AnimalHarvest.removeFish(<minecraft:fish:3>);
```
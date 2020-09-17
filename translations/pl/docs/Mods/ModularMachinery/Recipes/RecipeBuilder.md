# Konstruktor przepisów

Klasa RecipeBuilder ma tylko jeden cel: stworzenie nowego obiektu [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) dla Ciebie.

## Dzwonienie

Możesz wywołać pakiet Brew używając `mods.moduarmachinery.RecipeBuilder`

## Tworzenie Przepisu.

Są to jedyne funkcje do odnalezienia w klasie, obie zwracają nowy obiekt przepisowy [](/Mods/ModularMachinery/Recipes/RecipePrimer/).

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(Regenerator ciągów, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder(Regenerator ciągów, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
var item = <item:minecraft:gold_ingot>;
```
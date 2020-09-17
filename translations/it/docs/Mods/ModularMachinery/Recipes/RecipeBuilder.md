# RicipeBuilder

La classe RecipeBuilder ha solo un obiettivo: creare un nuovo oggetto [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) per te.

## Chiamata

Puoi chiamare il pacchetto Brew usando `mods.modularmachinery.RecipeBuilder`

## Creazione di una RicettaPrimer.

Queste sono le uniche funzioni da trovare nella classe, entrambe restituiscono un nuovo oggetto [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/).

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String AssociatedMachineRegistryName, int processingTickTime, int ordiningPriority);


```

```zenscript
var item = <item:minecraft:gold_ingot>;
```
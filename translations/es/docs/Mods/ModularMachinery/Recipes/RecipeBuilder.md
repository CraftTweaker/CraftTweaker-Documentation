# Constructor de recetas

La clase RecipeBuilder solo tiene un objetivo: Crear un nuevo objeto [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) para ti.

## Llamando

Puedes llamar al paquete Brew usando `mods.modularmachinery.RecipeBuilder`

## Creando un Primer de recetas.

Estas son las únicas funciones que se encuentran en la clase, ambas retornan un nuevo objeto [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/).

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
elemento var = <item:minecraft:gold_ingot>;
```
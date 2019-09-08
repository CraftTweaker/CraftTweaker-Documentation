# RecipeBuilder

The RecipeBuilder class only has one objective: Creating a new [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) Object for you.

## 导入包

You can call the Brew package using `mods.modularmachinery.RecipeBuilder`

## Creating a RecipePrimer.

These are the only functions to be found in the class, they both return a new [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) Object.

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
var item = <item:minecraft:gold_ingot>;
```
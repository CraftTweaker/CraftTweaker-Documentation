# RecipeBuilder

Die RecipeBuilder-Klasse hat nur ein Ziel: Erstellen eines neuen [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) Objekts für Sie.

## Anruf

Sie können das Braupaket mit `mods.modularmachinery.RecipeBuilder` aufrufen

## Erstelle einen RecipePrimer.

Dies sind die einzigen Funktionen, die in der Klasse gefunden werden, beide geben ein neues [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) Objekt zurück.

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
var item = <item:minecraft:gold_ingot>;
```
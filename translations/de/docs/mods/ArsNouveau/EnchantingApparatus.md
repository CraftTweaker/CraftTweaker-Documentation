::requiredMod[Ars-Nouveau]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ars-nouveau}

# Ars-Nouveau Enchanting Apparatus

Der Enchanting Apparatus ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird dem Enchanting Apparatus ein Rezept hinzufügen, das einen Diamanten ausgibt wenn Glas verzaubert wird mit Erde, einem Apfel und einem Pfeil auf den Sockeln.

```zenscript
// <recipetype:ars_nouveau:enchanting_apparatus>.addRecipe(name as string, result as IItemStack, reagent as IIngredient, pedestalItems as IIngredient[])

<recipetype:ars_nouveau:enchanting_apparatus>.addRecipe("enchanting_test", <item:minecraft:diamond>, <item:minecraft:glass>, [<item:minecraft:dirt>, <item:minecraft:apple>, <item:minecraft:arrow>]);
```

#### Remove Recipes

The following script will remove all recipes from the Enchanting Apparatus that output the Ring of Lesser Discount.

```zenscript
// <recipetype:ars_nouveau:enchanting_apparatus>.removeRecipe(output as IItemStack);

<recipetype:ars_nouveau:enchanting_apparatus>.removeRecipe(<item:ars_nouveau:ring_of_lesser_discount>);
```

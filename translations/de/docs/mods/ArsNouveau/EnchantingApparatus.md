::requiredMod[Ars-Nouveau]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ars-nouveau}

# Ars-Nouveau Enchanting Apparatus

Der Enchanting Apparatus ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird dem Enchanting Apparatus ein Rezept hinzufügen, das einen Diamanten ausgibt wenn Glas verzaubert wird mit Erde, einem Apfel und einem Pfeil auf den Sockeln.

```zenscript
// <recipetype:ars_nouveau:enchanting_apparatus>.addRecipe(String name, IItemStack result, IIngredient reagent, IIngredient[] pedestalItems)

<recipetype:ars_nouveau:enchanting_apparatus>.addRecipe("enchanting_test", <item:minecraft:diamond>, <item:minecraft:glass>, [<item:minecraft:dirt>, <item:minecraft:apple>, <item:minecraft:arrow>]);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte aus dem Enchanting Apparatus entfernen, die den "Ring of Lesser Discount" ausgeben.

```zenscript
// <recipetype:ars_nouveau:enchanting_apparatus>.removeRecipe(IItemStack output);

<recipetype:ars_nouveau:enchanting_apparatus>.removeRecipe(<item:ars_nouveau:ring_of_lesser_discount>);
```

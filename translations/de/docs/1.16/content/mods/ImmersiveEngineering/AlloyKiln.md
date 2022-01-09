::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Legierungsofen

Der Legierungsofen ist vom Typ von [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das nach 200 Ticks 2 Goldbarren ausgibt, wenn 10 Eisenbarren und beliebige Gegenstände aus dem Woll-Tag in einen Legierungsöfen gelegt werden.

```zenscript
// <recipetype:immersiveengineering:alloy>.addRecipe(string recipePath, IIngredient inputA, IIngredient inputB, int time, IItemStack output)

<recipetype:immersiveengineering:alloy>.addRecipe("spin_iron_to_gold", <item:minecraft:iron_ingot> * 10, <tag:items:minecraft:wool>, 200, <item:minecraft:gold_ingot> * 2);
```

#### Remove Recipes

The following script will remove all recipes from the Alloy Kiln that outputs a Constantan Ingot.

```zenscript
// <recipetype:immersiveengineering:alloy>.removeRecipe(output as IItemStack)

<recipetype:immersiveengineering:alloy>.removeRecipe(<item:immersiveengineering:ingot_constantan>);
```
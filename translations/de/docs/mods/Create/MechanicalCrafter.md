::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Mechanical Crafter

Der Mechanical Crafter ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn 3 Stöcke in das angegebene Muster des Mechanical Crafters gelegt werden.

```zenscript
// <recipetype:create:mechanical_crafting>.addRecipe(String name, IItemStack output, IIngredient[][] ingredients)

<recipetype:create:mechanical_crafting>.addRecipe("mechanical_crafter_test", <item:minecraft:diamond>, [[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:stick>], [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte des Mechanical Cratfter entfernen, die ein Flywheel ausgeben.

```zenscript
// <recipetype:create:mechanical_crafting>.removeRecipe(IItemStack output)

<recipetype:create:mechanical_crafting>.removeRecipe(<item:create:flywheel>);
```

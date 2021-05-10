::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Arc Furnace

Der Arc Furnace ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird ein Rezept hinzufügen, das Bedrock und einen Gold Nugget (als Slag) nach 2000 Ticks ausgibt, wenn zwei Kohleblöcke, ein Diamant und ein beliebiger Gegenstand aus dem Woll-Tag in einen Arc Furnace gelegt werden. Das Rezept benötigt 100000 IF.

```zenscript
// <recipetype:immersiveengineering:arc_furnace>.addRecipe(string recipePath, IIngredient mainIngredient, IIngredient[] additives, int time, int energy, IItemStack[] outputs, @Optional(<item:minecraft:air>) IItemStack slag)

<recipetype:immersiveengineering:arc_furnace>.addRecipe("coal_to_bedrock", <item:minecraft:coal_block> * 2, [<item:minecraft:diamond> * 1, <tag:items:minecraft:wool>], 2000, 100000, [<item:minecraft:bedrock>], <item:minecraft:gold_nugget>);
```

#### Remove Recipes

Entfernt alle Rezepte, bei denen mindestens eines der Ausgaben mit der angegebenen Ausgabe übereinstimmt.

The following script will remove two recipes from the Arc Furnace.

Das erste Rezept, das entfernt wird, ist das Rezept für Slag. Da `checkSlag` `true` ist, wird es alle Rezepte entfernen, die Slag ausgeben. Das zweite Rezept, das entfernt wird, ist das Rezept für drei Eisenbarren.

```zenscript
// <recipetype:immersiveengineering:arc_furnace>.removeRecipe(IItemStack output, @Optional(false) bool checkSlag)

<recipetype:immersiveengineering:arc_furnace>.removeRecipe(<item:immersiveengineering:slag>, true);
<recipetype:immersiveengineering:arc_furnace>.removeRecipe(<item:minecraft:iron_ingot> * 3);
```
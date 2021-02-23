::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Sägewerk

Das Sägewerk ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Sägerezept hinzufügen

Das folgende Skript fügt dem Sägewerk ein Rezept hinzu, das fünf Knochen- und 2 Knochenmehl ausgibt bei einem Einsatz einem Knochenblock und 1000IF.

Dieses Rezept erfordert, dass ein Sägeblatt im Sägewerk vorhanden ist, um zu funktionieren.

```zenscript
// <recipetype:immersiveengineering:sawmill>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack output, IItemStack[] outputSecondaries)

<recipetype:immersiveengineering:sawmill>.addRecipe("splitting_bones", <item:minecraft:bone_block>, 1000, <item:minecraft:bone> * 5, [<item:minecraft:bone_meal> * 2]);
```

#### Sawing- und Stripping-Rezept hinzufügen

Das folgende Skript fügt dem Sägewerk ein Rezept hinzu, das wenn eine Sägeblatte vorhanden ist, einen Grasblock, zwei Stöcke und Sägestaub ausgegeben, aber wenn eine Sägeblatte nicht vorhanden ist, nur ein Grasblock und einen Toten Busch ausgegeben wird. Die Eingabe für dieses Rezept ist jedes Item aus dem Setzlingtag und benötigt 1200 IF.

Dieses Rezept braucht kein Sägeblatt, um im Sägewerk präsent zu sein.

```zenscript
//<recipetype:immersiveengineering:sawmill>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack strippedOutput, IItemStack[] strippedOutputSecondaries, IItemStack output, IItemStack[] outputSecondaries)

<recipetype:immersiveengineering:sawmill>.addRecipe("shredding_seeds", <tag:items:minecraft:saplings>, 1200, <item:minecraft:dead_bush>, [<item:minecraft:grass>], <item:minecraft:stick> * 2, [<item:immersiveengineering:dust_wood>]);
```

#### Remove Recipes

Das folgende Skript entfernt alle Rezepte (Sägen oder Strippen), die Eichenbretter als primäre oder sekundäre Ausgabe haben.

```zenscript
// <recipetype:immersiveengineering:sawmill>.removeRecipe(output as IItemStack)

<recipetype:immersiveengineering:sawmill>.removeRecipe(<item:minecraft:oak_planks>);
```
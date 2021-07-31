::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Metallpresse

Die Metallpresse ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept zur Metallpresse hinzu, das Papier verwendet, benutzt das Ingenieurhandbuch als Form, benötigt 1000 IF und gibt ein Ingenieurhandbuch aus.

```zenscript
// <recipetype:immersiveengineering:metal_press>.addRecipe(String recipePath, IIngredient input, IItemStack mold, int energy, IItemStack output)

<recipetype:immersiveengineering:metal_press>.addRecipe("copy_manual", <item:minecraft:paper>, <item:immersiveengineering:manual>, 1000, <item:immersiveengineering:manual>);

```

#### Remove Recipes

The following script will remove all recipes from the Metal Press that output two Empty Casing.

```zenscript
// <recipetype:immersiveengineering:metal_press>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:metal_press>.removeRecipe(<item:immersiveengineering:empty_casing> * 2);
```
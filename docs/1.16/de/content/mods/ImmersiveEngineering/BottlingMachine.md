::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Abfüllmaschine

Die Abfüllmaschine ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird ein Rezept zu der Abfüllmaschine hinzufügen, die einen Stick verwenden, 250mb aller Flüssigkeiten im Wasser-Tag und geben eine Holzspitzhacke aus.

```zenscript
// <recipetype:immersiveengineering:bottling_machine>.addRecipe(string recipePath, IIngredient itemInput, MCTagWithAmount<Fluid> fluidTag, IItemStack output)

<recipetype:immersiveengineering:bottling_machine>.addRecipe("grow_a_pick", <item:minecraft:stick>, <tag:fluids:minecraft:water> * 250, <item:minecraft:wooden_pickaxe>);
```

#### Remove Recipes

Das folgende Skript wird alle Rezepte von der Abfüllmaschine entfernen, die einen nassen Schwamm ausgibt.

```zenscript
// <recipetype:immersiveengineering:bottling_machine>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:bottling_machine>.removeRecipe(<item:minecraft:wet_sponge>);
```
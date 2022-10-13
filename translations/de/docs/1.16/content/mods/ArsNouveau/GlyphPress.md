::requiredMod[Ars-Nouveau]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ars-nouveau}

# Ars-Nouveau Glyphenpresse

Die Glyphenpresse ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt der Glyphenpresse ein Tier "1" Rezept hinzu, das einen Diamanten ausgibt, wenn der Presse Erde gegeben wird.

```zenscript
// <recipetype:ars_nouveau:glyph_recipe>.addRecipe(name as String, tier as String, reagent as IItemStack, output as IItemStack);

<recipetype:ars_nouveau:glyph_recipe>.addRecipe("glyph_test", "one", <item:minecraft:dirt>, <item:minecraft:diamond>);
```

#### Remove Recipes

The following script will remove all recipes from the Glyph Press that output Glyph: Touch.

```zenscript
// <recipetype:ars_nouveau:glyph_recipe>.removeRecipe(output as IItemStack);

<recipetype:ars_nouveau:glyph_recipe>.removeRecipe(<item:ars_nouveau:glyph_touch>);
```
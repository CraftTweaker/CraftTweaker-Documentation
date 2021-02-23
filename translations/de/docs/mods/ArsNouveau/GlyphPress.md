::requiredMod[Ars-Nouveau]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ars-nouveau}

# Ars-Nouveau Glyphenpresse

Die Glyphenpresse ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt der Glyphenpresse ein Tier "1" Rezept hinzu, das einen Diamanten ausgibt, wenn der Presse Erde gegeben wird.

```zenscript
// <recipetype:ars_nouveau:glyph_recipe>.addRecipe(String name, String tier, IItemStack reagent, IItemStack output);

<recipetype:ars_nouveau:glyph_recipe>.addRecipe("glyph_test", "one", <item:minecraft:dirt>, <item:minecraft:diamond>);
```

#### Remove Recipes

Das folgende Skript entfernt alle Rezepte von der Glyphenpresse, die "Glyph: Touch" ausgibt.

```zenscript
// <recipetype:ars_nouveau:glyph_recipe>.removeRecipe(IItemStack output);

<recipetype:ars_nouveau:glyph_recipe>.removeRecipe(<item:ars_nouveau:glyph_touch>);
```
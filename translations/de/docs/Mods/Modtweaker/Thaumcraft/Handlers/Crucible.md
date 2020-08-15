# Crucible

Dieses Paket erlaubt Ihnen Rezepte zu/von der Crucible hinzuzufügen und zu entfernen.

## Dieses Paket importieren

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
importieren mods.thaumcraft.Crucible;
```

## Rezepte hinzufügen

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String name, String researchKey, IItemStack output, IIngredient input, CTAspectStack[] aspects);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Entfernen von Rezepten

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(IItemStack output);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```
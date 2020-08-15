# Infusion

Dieses Paket erlaubt Ihnen Rezepte zu/von der Infusion hinzuzufügen und zu entfernen.

## Dieses Paket importieren

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
importieren mods.thaumcraft.Infusion;
```

## Rezepte hinzufügen

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(String name, String Research, IItemStack output, int instability, CTAspectStack[] aspects, IIngredient centralItem, IIngredient[] recipe);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## Entfernen von Rezepten

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


//mods.thaumcraft.Infusion.removeRecipe(IItemStack output);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```
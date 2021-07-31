# Crucible

This package allows you to add and remove recipes to/from the Crucible.

## 导入相关包

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
import mods.thaumcraft.Crucible;
```

## Adding recipes

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String name, String researchKey, IItemStack output, IIngredient input, CTAspectStack[] aspects);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Removing recipes

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(IItemStack output);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```
# Arcane Workbench

This package allows you to add and remove recipes to/from the Arcane Workbench.

## 패키지 임포트하기

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
import mods.thaumcraft.ArcaneWorkbench;
```

## Adding recipes

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[][] input);
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//mods.thaumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[] input);
mods.thaumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Removing recipes

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IItemStack output);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>);
```
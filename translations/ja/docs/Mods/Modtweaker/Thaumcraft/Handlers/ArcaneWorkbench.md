# Arcane Workbench

このパッケージでは、Arcane Workbenchにレシピを追加および削除できます。

## パッケージのインポート

[パッケージとそのメソッドを](/AdvancedFunctions/Import/) インポートして、メソッドの再取得を促進できます。

```zenscript
import mods.thaumcraft.ArcaneWorkbench;
```

## レシピの追加

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[][] input);
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]]);


//mods.thaumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack output, IIngredient[] input);
mods.thaumcraft.ArcaneWorkbench.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## レシピを削除

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IItemStack output);
mods.thaumcraft.ArcaneWorkbench.removeRemoveRecipe(<thaumcraft:goggles>);
```
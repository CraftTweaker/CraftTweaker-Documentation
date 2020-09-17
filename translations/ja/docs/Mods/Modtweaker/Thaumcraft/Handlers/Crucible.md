# るつぼ可能

このパッケージでは、レシピをCrucibleに追加および削除できます。

## パッケージのインポート

[パッケージとそのメソッドを](/AdvancedFunctions/Import/) インポートして、メソッドの再取得を促進できます。

```zenscript
import mods.thaumcraft.Crucible;
```

## レシピの追加

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String研究キー, IItemStack出力, IIngredient入力, CTAspectStack[] aspects);
mods.thaumcraft.Crucible.registerRecipe("crumbleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## レシピを削除

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(IItemStack output);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```
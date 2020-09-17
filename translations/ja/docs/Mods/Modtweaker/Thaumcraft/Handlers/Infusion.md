# 注入量

このパッケージでは、注入にレシピを追加および削除できます。

## パッケージのインポート

[パッケージとそのメソッドを](/AdvancedFunctions/Import/) インポートして、メソッドの再取得を促進できます。

```zenscript
import mods.thaumcraft.Infusion;
```

## レシピの追加

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(String name, String research, IItemStack 出力, int 不安定, CTAspectStack[] アスペクト, IIngredient centralItem, IIngredient[] recipe);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## レシピを削除

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


///mods.thaumcraft.Infusion.removeRecipe(IItemStack output);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```
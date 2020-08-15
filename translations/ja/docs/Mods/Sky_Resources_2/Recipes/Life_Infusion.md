# 生命の注入量

*注入* パッケージは、Life Infusionプロセスにレシピを追加または削除するために使用されます。

## 発信中

*mods.skyresources.infusion* を使って `infusion` パッケージを呼び出すことができます

## レシピの追加

```zenscript
//mods.skyresources.infusion.addRecipe(IItemStack の出力, IItemStack inputStack, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## レシピの削除

```zenscript
//mods.skyresources.infusion.removeRecipe(IItemStack output);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```
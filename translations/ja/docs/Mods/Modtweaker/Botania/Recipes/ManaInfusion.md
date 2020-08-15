# Mana Infusion

ManaInfusionパッケージは、Botania ManaPoolへ/からレシピを追加または削除するために使用されます。

## 発信中

`mods.botania.ManaInfusion` を使ってManaInfusionパッケージを呼び出すことができます。

## すべての登録済みのレシピを検索

登録済みのManaInfusionレシピは [`/ct botania infusions`](/Mods/Modtweaker/Botania/Commands/) を使用して確認できます。

## レシピの追加

```zenscript
//mods.botania.ManaInfusion.addInfusion(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## レシピの削除

```zenscript
//mods.botania.ManaInfusion.removeRecipe(IIngredient出力);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```
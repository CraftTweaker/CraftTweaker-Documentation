# Pure Daisy

PureDaisyパッケージは、Botania Pure Daisyにレシピを追加または削除するために使用されます。

## 発信中

`mods.botania.PureDaisy` を使用して PureDaisy パッケージを呼び出すことができます。

## すべての登録済みのレシピを検索

[`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/) を使用して登録されているすべてのPure Daisy レシピを見つけることができます。

## レシピの追加

時間の既定値は 150 ティックです

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## レシピの削除

```zenscript
//mods.botania.PureDaisy.removeRecipe(IIngredient出力);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```
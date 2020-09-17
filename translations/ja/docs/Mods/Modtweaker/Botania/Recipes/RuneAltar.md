# ルーンアルタ

RuneAltarパッケージは、ボタニアルーン祭りへのレシピの追加や削除に使用されます。

## 発信中

`mods.botania.RuneAltar` を使用して RuneAltar パッケージを呼び出すことができます。

## すべての登録済みのレシピを検索

[`/ct botania 祭壇`](/Mods/Modtweaker/Botania/Commands/) を使用して登録されているすべてのRune Altarレシピを見つけることができます。

## レシピの追加

```zenscript
//mods.botania.RuneAltar.addRecipe(IItemStack 出力, IIngredient[] input, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## レシピの削除

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```
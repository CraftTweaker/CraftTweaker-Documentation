# エルフ取引

ElvenTradeパッケージは、BotaniaポータルからAlfheimにレシピを追加または削除するために使用されます。

## 発信中

`mods.botania.ElvenTrade` を使用して、ElvenTrade パッケージを呼び出すことができます。

## すべての登録済みのレシピを検索

登録済みのElvenTradeレシピは、 [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands/) を使用して確認できます。

## レシピの追加

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] inputs, IIngredient[] input);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## レシピの削除

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```
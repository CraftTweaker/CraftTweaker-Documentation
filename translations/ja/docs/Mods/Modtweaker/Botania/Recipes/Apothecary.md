# 花弁Apothecary

Apothecaryパッケージは、ボタニア花弁Apothecaryへの/からのレシピの追加または削除に使用されます。

## 発信中

`mods.botania.Apothecary` を使用してApothecaryパッケージを呼び出すことができます。

## レシピの追加

返された [IItemStack](/Vanilla/Items/IItemStack/) を出力パラメータとして使用するか、またはボタニアフラワーの名前を文字列として追加することができます。 文字列名は植物花にしか使えない  
一つ覚えておいてください:  
薬剤師は **花びらのみ受け入れるようにハードコードされています**. どんな材料でもレシピを加えられるのに使うべきだな

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack output, IIngredient[] input);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//mods. otania.Apothecary.addRecipe(String output, IIngredient[] input);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## レシピの削除

出力パラメータとして返された [IItemStack](/Vanilla/Items/IItemStack/) を使用するか、またはボタニアフラワーの名前を文字列として使用してレシピを削除できます。 文字列名は植物花にしか使えない

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```
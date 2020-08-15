# Steelworks

Steelworksは、蒸気を使用して入力項目と流体を出力項目に変換する機械です。

## 発信中

`mods.steamagerevolution.Steelworks` を使ってSteelworksパッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [IItemStack](/Vanilla/Items/IItemStack/) `出力` で見つけた最初のレシピを削除します。

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack output);

// 例
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

この関数は、現在スチールワークに定義されているすべての *レシピを* 削除します。

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## 追加中

この機能は、製鋼所の新しいレシピを追加するために使用されます。

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack input, IIngredient input2, IItemStack output, int craftTime, int steamCost);

// 例
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.first, Item, 200, 200);
```

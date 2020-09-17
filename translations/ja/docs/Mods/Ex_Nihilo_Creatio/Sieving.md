# Sieving

## パッケージ

フルパスを明確にせずに `ふるい` にアクセスするには、以下のようにスクリプトの最上部にあるパッケージをインポートできます。

```zenscript
import mods.exnihilocreatioSieve;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) ブロック** 出力をドロップするブロック。
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** ブロックからドロップするアイテム。
- **浮動小数点数** 確率は0-1の間でなければなりません。

## ストリングメッシュ

```zenscript
Sieve.addStringMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## フリントメッシュ

```zenscript
Sieve.addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## 鉄メッシュ

```zenscript
Sieve.addIronMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## ダイヤモンドメッシュ

```zenscript
Sieve.addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## 削除

```zenscript
Sieve.removeAll();
```

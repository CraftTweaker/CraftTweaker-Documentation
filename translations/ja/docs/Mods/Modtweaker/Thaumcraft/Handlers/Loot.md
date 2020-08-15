# Loot Bags

このパッケージでは、アイテムをLoot Bagsへ/から追加および削除できます。

## パッケージのインポート

[パッケージとそのメソッドを](/AdvancedFunctions/Import/) インポートして、メソッドの再取得を促進できます。

```zenscript
import mods.thaumcraft.LootBag;
```

## 戦利品の種類

0 から 2 までの数字から関数への配列を指定する必要があります。  
影響を受ける戦利品の種類を決定する。

- 0: Common
- 1: ふつうではない
- 2: レア

## アイテムを追加中

注意:ゴールドコインは2000の値を持って、ダイヤモンドは50です。

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[] bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## 項目を削除中

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack stack, int[] bagTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```
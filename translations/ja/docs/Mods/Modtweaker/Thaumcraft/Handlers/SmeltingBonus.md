# 製錬ボーナス

このパッケージでは、融解ボーナスリストとの間でアイテムを追加および削除することができます。  
溶解ボーナスリストは、火炎炉がアイテムを調理するたびに照会されます。

## パッケージのインポート

[パッケージとそのメソッドを](/AdvancedFunctions/Import/) インポートして、メソッドの再取得を促進できます。

```zenscript
import mods.thaumcraft.SmeltingBonus;
```

## アイテムを追加中

注意: 入力は IItemStack または IOreDictEntry のいずれかである必要があります。

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient input, WeightedItemStack stack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## 項目を削除中

注意: 入力は IItemStack または IOreDictEntry のいずれかである必要があります。

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```
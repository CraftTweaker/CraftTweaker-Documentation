# Factorizer

Factorizer Managerを使用すると、ファクトライザにレシピを追加できます。

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thermalexpansion.Factorizer;
```

## レシピを追加

レシピの一方向分割/組み合わせ、または双方向バインディングを追加できます。

```zenscript
//mods.thermalexpansion.Factorizer.addRecipeSplit(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(IItemStack combined, IItemStack split);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## レシピを削除

もちろんレシピを削除することもできます。  
双方向バインディングを削除したい場合は、2つのコールが必要です。

```zenscript
//mods.thermalexpansion.Factorizer.removeRecipeSplit(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```
# ReactantDynamo

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thermalexpansion.ReactantDynamo;
```

## 反応を追加

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## 属性反応を追加

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## リアクションを削除

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## 属性反応を削除

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```
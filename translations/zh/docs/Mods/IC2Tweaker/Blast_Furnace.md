# 高炉高炉子

## 所属包名

`导入 mods.ic2.BlastFurnace;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**
- **整流总成本** Per-tick IC2 液化空气成本，以mB/tick 计量。
- **整数时间** 按刻度计算的总时间成本

## 添加配方

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[…]输出, Ingredient 输入, int totalFluidCost, int time);

mods.ic2.BlastFurnace.addRecipe(format@@<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## 移除

现在只需移除 `config/ic2/blast_furnace.ini` 中的相应行.
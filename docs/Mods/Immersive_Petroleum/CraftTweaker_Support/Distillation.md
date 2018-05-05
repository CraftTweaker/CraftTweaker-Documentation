# 精馏

## 添加配方

添加精馏配方的函数由以下部分组成:

|类型              |数据类型                                                    |
|------------------|-----------------------------------------------------------|
|流体输出           |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack) 数组[]|
|物品输出           |[ItemStack（物品堆）](/Vanilla/Items/IItemStack) 数组[]     |
|输入              |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)        |
|每刻消耗的能量     |整数                                                        |
|时间（单位：刻）   |整数                                                        |
|概率              |单精度型 数组 []                                             |


### 前言:
每一个物品堆条目与相应的概率数组条目一一对应。

例:
```
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

概率的值应在0-1之间。
因为它会将单精度型值转化为在0%-100%之间的百分比
即：
```
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

虽然你可以将概率设置为大于1的数，返回的值不会超过100%。

### 代码示例:
```JAVA
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods.immersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```

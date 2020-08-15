# 蒸馏器

## 添加配方

蒸馏法“addRecipe”方法包括：

| 类型     | 数据类型                                         |
| ------ | -------------------------------------------- |
| 输出     | [流体栈](/Vanilla/Liquids/ILiquidStack/) 数组[……] |
| 输出     | [项目堆栈](/Vanilla/Items/IItemStack/) 数组 []     |
| 输入     | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | 整型                                           |
| 工单中的时间 | 整型                                           |
| 可能的    | 浮动数组 []                                      |

### 前置：

每个物品堆栈条目都与相应的“机会”数组条目链接。

比如：

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

“浮点”值应该介于 0 和 1 之间。 因为它将它从一个浮点值转换成一个0%到100%之间的百分比值 I.E：

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

虽然你可以提交一个大于1的浮点数，但它永远不会产生超过 100% 的值

### 代码示例：

```zenscript
//mods.immersivepolleum.Distillation.addRecipe(ILiquidStack[…]液体输出, IItemStack[…]项目输出, ILiquidStack fluidInput, int energy, int time, flat[…]概率)

mods. mmersiveproleum.Stillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, [1, 1]);
```
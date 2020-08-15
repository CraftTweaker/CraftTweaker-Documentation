# 库

## registerReservoir

| 类型    | 数据类型                                         |
| ----- | -------------------------------------------- |
| 名称标识符 | String                                       |
| 流体    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 最小尺寸  | 整型                                           |
| 最大尺寸  | 整型                                           |
| 增补率   | 整型                                           |
| 权重    | 整型                                           |

### 权重

重量是一个含有该特定液体库的区块的加权机会。 重量按Total的X值计算。

所以，如果你有 5 个储备值： 5, 5, 6, 8, 10

然后每个相应条目都有加权几率：

    5  in 34
    5  in 34
    6  in 34
    8  in 34
    10 in 34
    

### 代码示例：

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(名称, ILiquidStack fluid, int minSize, int maxSize, int femergerishRate, int high);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64,000, 200, 5);
```
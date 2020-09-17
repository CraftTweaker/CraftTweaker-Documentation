# 液体燃料

液体燃料用于肺电学工艺：在(高级)液体压缩机中压制以制造压缩空气，(可选的)Kerosene Lamp中则可产生光线。 默认情况下，炼油厂生产的液体被定义为燃料以及超过Kelvin温度305度以上的任何液体。

## 导入

您可以使用 `mods.pneumaticcraft.like fuels 调用液体燃料包`。

## 移除配方

此函数去掉 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluid` 作为燃料：

```zenscript
mods.pneumaticraft.lifuel.removeFuel(ILiquidStack fluid);
// 示例
mods.pneumaticcraft.lifuel.removeFuel(<liquid:lpg>);
```

此函数取消注册 *所有* 个注册燃料：

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## 添加

以下功能可用于向燃料登记处添加液体：

```zenscript
/ 将一定液体登记为燃料。 mlPerBucket界定每桶燃料产生的压缩空气数量。 供参考，空气压缩机中的一块煤炭产生了16 000米的空气。
mods.pneumaticcraft.lifuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// 示例: 将水注册为燃料，每桶生产16000毫升空气。
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```
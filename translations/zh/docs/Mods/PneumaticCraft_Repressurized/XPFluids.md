# XP 流体

XP 流体被用于肺电化学合成器：被空中接口压制，这是一个强大的方块，可以与一个连接的玩家进行远程接口。 输出到空中接口的XP流体被转换为玩家体验水平，而输出的XP流体则从玩家体验中抽取。

默认情况下，下列液体会被空中接口识别：

* XP Juice(EnderIO, Cyclic, Openblocks)
* 知识的基础(热传播)
* 生物论文(工业前景)

这个包允许空中接口作为XP液或现有XP液体使用任意的其他液体。

## 导入包

您可以使用 `mods.pneumaticcraft.xpfluid` 来调用 XP 流体包。

## 移除配方

这个函数去掉 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluid`:

```zenscript
mods.pneumaticraft.xpfluid.removeXPFLuid(ILiquidStack fluid);
// 示例
mods.pneumaticraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

This function deregisters *all* known XP fluids:

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## 添加

此函数可以用来注册流体为 XP 流体：

```zenscript
// 将液体注册为XP液体。 xpRatio定义了每毫桶液中玩家XP的数量。
mods.pneumaticraft.xpfluid.addXPFluid(ILiquidStack fluid, double ratio);

// 示例: 注册LPG 为一个 XP 液体，每mB
mods.pneumaticcraft.xpfluid.addXPFLuid(<liquid:lpg>, 10);
```
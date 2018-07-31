# 液态经验（XP Fluids）

液态经验用于气动工艺的空气接口，一个可以远程连接玩家的强大方块。玩家既可以往空气接口中输入液态经验以增加玩家的经验，又可以将玩家的经验转化为液态经验抽出。

默认情况下，以下流体可以被空气接口辨识：

- 液态经验 XP Juice (末影接口 EnderIO, 循环 Cyclic, 开源方块 Openblocks)
- 知识精华 Essence of Knowledge (热力基础 Thermal Foundation)
- 精华液 Mob Essence (工业先锋 Industrial Foregoing)

此相关包允许直接将其他流体注册为空气接口可以辨识的液态经验，也可以取消注册默认的液态经验。

## 导入

使用 `mods.pneumaticcraft.xpfluid`以导入液态经验相关包。

## 移除

以下函数取消注册`流体（fluid）`，数据类型为[流体堆（ILiquidStack）](/Vanilla/Variable_Types/ILiquidStack)：

```
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// 实例
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

以下函数取消注册*所有*已知的液态经验：

```
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## 添加

以下函数将流体注册为液体经验：

```java
// 将 fluid(流体)注册为液态经验。xpRatio(经验比例)指每 mB 流体给玩家的经验数量。
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack fluid, double ratio);

// 实例：将 LPG 注册为每 mB 给予玩家 10 经验的液态经验
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```

# 加热注册表

加热注册表允许分配一个整数值给一个与Cauldron、Crucible 和 Kiln交互的方块。

* 默认值： 原版火焰|1 存储火焰|2

# 添加热源

```zenscript
//stack 必须具有与方块关联的状态。
mods.betterwithmods.HeatRegistry.addHeatSource(StemStack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```
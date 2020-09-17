# HeatRegistry

HeatRegistry では、大釜、るつぼ、および Kiln と相互作用するブロックに整数値を割り当てることができます。

* Default Values: Vanilla fire | 1 Stoked Fire | 2

# 熱源の追加

```zenscript
//stack は、associated ブロック状態でなければなりません。
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```
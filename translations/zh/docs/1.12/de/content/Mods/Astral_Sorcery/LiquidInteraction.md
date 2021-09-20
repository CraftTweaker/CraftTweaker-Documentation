# 流体交互（LiquidInteraction）

流体交互相关包用于向星辉魔法的圣杯添加流体交互事件（例如熔岩和星能液）。

## Dieses Paket importieren

如果你想要导入相关包，代码见下：

```zenscript
import mods.astralsorcery.LiquidInteraction;
```

## 移除交互配方

This function removes the first recipe it finds that uses the given [liquids](/Vanilla/Liquids/ILiquidStack/) and returns the given output [stack](/Vanilla/Items/IItemStack/).  
If you leave out the output, it will remove the first recipe that uses the two given liquids regardless of their output.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
//liquid1 流体1
//liquid2 流体2
//output 输出
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## 添加配方

往圣杯交互配方中添加一个流体交互配方

[FluidStack](/Vanilla/Liquids/ILiquidStack/) amounts count as the amount of liquid that will be consumed if an interaction occurs.  
chance1 and chance2 define the chances the input fluids input1 and input2 are consumed respectively.  
weight determines how likely this is to be selected in comparison to the other liquid interactions registered for a given pair of fluid-inputs

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```
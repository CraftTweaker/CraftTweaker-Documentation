# 流体交互（LiquidInteraction）

流体交互相关包用于向星辉魔法的圣杯添加流体交互事件（例如熔岩和星能液）。

## 导入相关包

如果你想要导入相关包，代码见下：

    import mods.astralsorcery.LiquidInteraction;
    

## 移除交互配方

此函数移除第一个找到的使用指定的[流体堆](/Vanilla/Liquids/ILiquidStack/)交互得到指定[物品堆](/Vanilla/Items/IItemStack/)的配方。   
如果输出为空，则会忽略输出并移除指定的第一个找到的指定两种流体交互的配方。

    //LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
    //liquid1 流体1
    //liquid2 流体2
    //output 输出
    LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
    LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
    

## 添加配方

往圣杯交互配方中添加一个流体交互配方

[流体堆](/Vanilla/Liquids/ILiquidStack/)的数量表示每次交互消耗的流体数量。  
chance1 和 chance2 分别表示两种输入的流体 liquidln1 和 liquidln2 消耗的概率  
weight（权重）决定了在输入的两种流体相同的情况时交互得到此物品的概率

    //LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
    LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
# 聚星缸（Lightwell）

你可以添加或移除聚星缸的流体配方。

## 导入

使用`mods.astralsorcery.Lightwell`以导入聚星缸相关包。

## 移除配方

这个方法移除第一个且`输出`为传入的流体堆（[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)）且`输入`为传入的物品堆（[IItemStack](/Vanilla/Items/IItemStack/)）的配方。 如果有多个配方可以合成传入的输出，你需要多次使用这个方法！

你可以将输出设置为`null`，这样游戏只会在输入的物品堆中寻找符合的配方。

```JAVA
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack output);
//input 输入
//output 输出
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## 添加配方

    //mods.astralsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
    mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
    

| 参数                          | 参数类型                                                | 描述                                                                      |
| --------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------- |
| input（输入）                   | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)       | 输入的物品                                                                   |
| output（输出）                  | [流体堆（ILiquidStack）](/Vanilla/Liquids/ILiquidStack/) | 输出的流体。 只包含流体类别，获得流体的数量（与默认情况下的聚星缸一样）将会随昼夜变化或者其他条件的变化而变化。                |
| productionMultiplier（产量倍增器） | float                                               | 倍增器和其他参数均用于计算产出的液体数量。 这个数字一般为0.3-1.2。（就是说除非你要疯狂的产量，请不要填写类似于200这么大的数字:P） |
| shatterMultiplier（消失倍增器）    | float                                               | 倍增器的数字越大，每刻催化剂物品消失的概率就越小。                                               |
| colorHEX（16进制颜色）            | int                                                 | 悬浮物品附近粒子效果的颜色。                                                          |
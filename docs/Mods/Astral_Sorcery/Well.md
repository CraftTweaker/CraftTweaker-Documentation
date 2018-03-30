# 聚星缸

你可以添加或移除聚星缸的流体合成


## 导入
使用`mods.astralsorcery.Lightwell`以导入聚星缸相关包。

## 移除合成
这个方法移除第一个使用传入的`输入`[物品堆](/Vanilla/Items/IItemStack)以合成传入的`输出`[流体堆](/Vanilla/Liquids/ILiquidStack)
如果有多个合成表可以合成传入的输出，你需要多次使用这个方法！

你可以将输出设置为`null`，这样只会在输入的物品堆中寻找符合的合成。

```JAVA
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack output);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## 添加合成
```
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| 参数               | 参数类型                                      | 描述                                                                                                                                                                                      |
|-------------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input（输入）      | [物品堆](/Vanilla/Items/IItemStack)           | 输入的物品                                                                                                                                                                                    |
| output（输出）    | [流体堆](/Vanilla/Liquids/ILiquidStack)        | 只包含流体类别，获得流体的数量（就像默认的聚星缸）将会随昼夜变化或者其他条件的变化而变化。                                                                                                           |
| productionMultiplier（产量倍增器）| 浮点数                                        | 倍增器和其他参数均用于计算产出的液体数量。这个数字一般为0.3-1.2。（就是说如果要合理一些的话，就别写像200这么大的数字:P）|
| shatterMultiplier（消失倍增器）| 浮点数                                         | 倍增器的数字越大，每刻催化剂消失的概率就越小。                                                    |
| colorHEX（16进制颜色）         | 整数                                           | 悬浮物品附近粒子效果的颜色。                                                      |

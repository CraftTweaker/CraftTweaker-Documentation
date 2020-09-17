# 电解器

## 所属包名

`导入 mods.ic2.Electrolyzer;`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[]输出** 输出全部输出。 每个栏位对应于西南向下方向。 尾随空可能被省略。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **整流功率** 耗电量，以欧盟/刻度
- **@可选时间** 时间成本 如果没有给出，默认为200。

## 添加配方

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] outputs, ILiquidStack input, int power, @Optional int time);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```
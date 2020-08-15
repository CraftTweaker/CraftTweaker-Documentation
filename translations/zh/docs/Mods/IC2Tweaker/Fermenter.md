# 发酵器

## 所属包名

`导入 mods.ic2.Fermenter;`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** 发酵液体
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **整流** 发酵所需的热量

## 添加配方

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack output, ILiquidStack input, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```
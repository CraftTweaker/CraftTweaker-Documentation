# Fermenter

## 所属包
`import mods.ic2.Fermenter;`

## 使用方式
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** The fermented fluid
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input**  The input fluid
- **int heat** The amount of heat required for fermentation

## 添加配方

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack output, ILiquidStack input, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```

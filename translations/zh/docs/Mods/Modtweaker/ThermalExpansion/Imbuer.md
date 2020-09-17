# Alchemical Imbuer

## 所属包名

`格式。thermalext.Imbuer`

## 添加配方

```zenscript
mods.thermalext.Imbuer.addRecipe(ILiquidStack 输出, IItemStack 输入, ILiquidStack inputFluid, int energy);

mods.thermalext.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## 删除配方

```zenscript
mods.thermalext.Imbuer.removeRecipe(IItemStack input, ILiquidStack secondInput);

mods.thermalext.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
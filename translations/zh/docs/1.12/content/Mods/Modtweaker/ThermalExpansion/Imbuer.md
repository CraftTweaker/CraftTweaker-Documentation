# Alchemical Imbuer

## 所属包
`mods.thermalexpansion.Imbuer`

## 添加配方

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack output, IItemStack input, ILiquidStack inputFluid, int energy);

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## Removal

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(IItemStack input, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
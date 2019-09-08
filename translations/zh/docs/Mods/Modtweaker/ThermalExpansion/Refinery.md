# Refinery

## 所属包名

`mods.thermalexpansion.Refinery`

## 添加配方

```zenscript
mods.thermalexpansion.Refinery.addRecipe(ILiquidStack output, IItemStack outputItem, ILiquidStack input, int energy);

mods.thermalexpansion.Refinery.addRecipe(<liquid:lava>, <minecraft:diamond>,<liquid:water>, 50);
```

## 删除配方

```zenscript
mods.thermalexpansion.Refinery.removeRecipe(ILiquidStack input);

mods.thermalexpansion.Refinery.removeRecipe(<liquid:resin>);
```
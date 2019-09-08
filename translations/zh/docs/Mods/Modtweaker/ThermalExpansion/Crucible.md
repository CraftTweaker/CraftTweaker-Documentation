# Crucible

## 所属包名

`mods.thermalexpansion.Crucible`

## 添加配方

```zenscript
mods.thermalexpansion.Crucible.addRecipe(ILiquidStack output, IItemStack input, int energy);

mods.thermalexpansion.Crucible.addRecipe(<liquid:refined_oil>, <minecraft:diamond>, 50);
```

## 删除配方

```zenscript
mods.thermalexpansion.Crucible.removeRecipe(IItemStack input);

mods.thermalexpansion.Crucible.removeRecipe(<minecraft:glowstone>);
```
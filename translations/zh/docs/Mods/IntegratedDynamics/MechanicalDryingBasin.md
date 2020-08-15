# 机械式干燥盆地：

这个包允许您修改干燥盆地的配方。

## 导入相关包

如果您想导入这个包，您可以在这里：

```zenscript
导入 mods.integrateddynamics.MechanicalDryingBasin;
```

## 添加配方

```zenscript
/MechanicalDryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalDryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10)；
```

## 删除配方

```zenscript
/MechanicalDryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalDryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//MechanicalDryingBasin. emoveRecipesWOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
MechanicalDryingBasin.removeRecipesWidOutput(<minecraft:leather>, null);
```
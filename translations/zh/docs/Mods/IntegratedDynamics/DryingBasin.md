# 旱盆地

此软件包允许您修改干燥盆地的配方。

## 导入相关包

如果您想导入这个包，您可以在这里：

```zenscript
导入 mods.integrateddynamics.DryingBasin;
```

## 添加配方

```zenscript
/DryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

DryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10)；
```

## 删除配方

```zenscript
//DryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
DryingBasin.removeRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//DryingBasin.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
DryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```
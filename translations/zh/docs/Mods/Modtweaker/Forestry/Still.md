# 仍然的

ModTinflow允许您添加或删除林业仍然是配方

## 导入包

您可以使用 `mods.forestry.Still` 来调用软件包。

## 删除配方

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## 配方添加

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOut, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```
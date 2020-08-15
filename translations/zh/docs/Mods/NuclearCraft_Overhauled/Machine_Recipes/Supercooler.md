# Supercooler

## Importing the Package
`mods.nuclearcraft.Supercooler`

## 添加配方
```zenscript
mods.nuclearcraft.Supercooler.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.Supercooler.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Supercooler.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Supercooler.removeAllRecipes();
```
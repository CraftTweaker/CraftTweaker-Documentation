# Crystallizer

## Importing the Package
`mods.nuclearcraft.Crystallizer`

## 添加配方
```zenscript
mods.nuclearcraft.Crystallizer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.Crystallizer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Crystallizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Crystallizer.removeAllRecipes();
```
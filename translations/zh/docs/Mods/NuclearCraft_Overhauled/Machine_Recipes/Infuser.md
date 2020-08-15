# Infuser

## Importing the Package
`mods.nuclearcraft.Infuser`

## 添加配方
```zenscript
mods.nuclearcraft.Infuser.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## 删除配方
```zenscript
mods.nuclearcraft.Infuser.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Infuser.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Infuser.removeAllRecipes();
```
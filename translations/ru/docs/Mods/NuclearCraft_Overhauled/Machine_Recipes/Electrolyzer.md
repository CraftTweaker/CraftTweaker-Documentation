# Электролизер

## Импортирование пакета
`mods.nuclearcraft.Электролизер`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Electrolyser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Electrolyser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Electrolyser.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Электролисер.removeAllRecipes();
```
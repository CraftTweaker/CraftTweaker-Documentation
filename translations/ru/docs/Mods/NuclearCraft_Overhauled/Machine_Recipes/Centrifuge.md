# Центрифуга

## Импортирование пакета
`mods.nuclearcraft.Центрифуга`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Centri<unk> .addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4 , @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Centri<unk> .removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Centri<unk> .removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Центрирование.removeAllRecipes();
```
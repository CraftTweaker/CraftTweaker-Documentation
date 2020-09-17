# Суперкрушитель

## Импортирование пакета
`mods.nuclearcraft.Суперкрушитель`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Supercooler.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Supercooler.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Supercooler.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Supercooler.removeAllRecipes();
```
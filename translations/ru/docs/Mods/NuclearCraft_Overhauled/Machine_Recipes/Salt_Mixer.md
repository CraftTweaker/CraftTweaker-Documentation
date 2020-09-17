# Соль микшер

## Импортирование пакета
`mods.nuclearcraft.SaltMixer`

## Добавление рецептов
```zenscript
mods.nuclearcraft.SaltMixer.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.SaltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.SaltMixer.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltMixer.removeAllRecipes();
```
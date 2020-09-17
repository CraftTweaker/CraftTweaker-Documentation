# Химический Реактор

## Импортирование пакета
`mods.nuclearcraft.Химический Реактор`

## Добавление рецептов
```zenscript
mods.nuclearcraft.ChemicalReactor.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.ChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.ChemicalReactor.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2);
mods.nuclearcraft.удаление химических реакторов ();
```
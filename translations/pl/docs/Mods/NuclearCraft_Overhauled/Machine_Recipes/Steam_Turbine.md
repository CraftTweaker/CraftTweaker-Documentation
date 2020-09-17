# Turbina parowa

## Importowanie pakietu
`mods.nuclearcraft.Turbina`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Turbine.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, podwójna moc PerMB, podwójna rozszerzenieLevel, @Optional String particleSpeedMultiplier);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Turbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Turbine.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.turbine.removeAllRecipes();
```
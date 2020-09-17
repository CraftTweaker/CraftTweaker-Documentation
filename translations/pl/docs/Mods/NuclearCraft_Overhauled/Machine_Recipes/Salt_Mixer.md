# Mikser solny

## Importowanie pakietu
`mods.nuclearcraft.SaltMixer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.SaltMixer.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.SoltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.SoltMixer.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SoltMixer.removeAllRecipes();
```
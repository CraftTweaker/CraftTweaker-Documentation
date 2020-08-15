# Rozszczepienie solą
**Uwaga: Częściowo uszkodzone**

## Importowanie pakietu
`mods.nuclearcraft.Rozszczepienie solą`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.SoltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack FluidStack Output, podwójna bazaCzas, podwójna bazaPower, @Opcjonalne podwójne Promieniowanie);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.SoltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SoltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SoltFission.removeAllRecipes();
```
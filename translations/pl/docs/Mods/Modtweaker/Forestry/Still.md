# Wciąż

ModTweaker pozwala na dodanie lub usunięcie przepisów dotyczących leśnictwa

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.Wciąż`

## Usuwanie przepisów

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## Dodawanie przepisów

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```
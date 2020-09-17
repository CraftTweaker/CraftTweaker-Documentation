# Noch

ModTweaker ermöglicht das Hinzufügen oder Entfernen von forstwirtschaftlichen Still Rezepten

## Anruf

You can call the package using `mods.forestry.Still`

## Rezept entfernen

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## Rezeptzusatz

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```
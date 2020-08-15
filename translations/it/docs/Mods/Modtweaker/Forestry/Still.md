# Ancora

ModTweaker consente di aggiungere o rimuovere la foresta Ricette Ancora

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.Still`

## Rimozione Ricetta

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## Aggiunta Ricetta

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```
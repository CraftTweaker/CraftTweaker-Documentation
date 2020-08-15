# Générateur de pétrole

## Paquet

`mods.actuallyadditions.OilGen`

## Ajouter

`genInstant` par défaut à 100 si omis

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Retirer

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack output);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```
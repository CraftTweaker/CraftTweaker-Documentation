# Imbuer alchimique

## Paquet

`mods.thermalexpansion.Imbuer`

## Ajouter

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack sortie, IItemStack entrée, ILiquidStack inputFluid, int energy);

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## Retirer

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(IItemStack input, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
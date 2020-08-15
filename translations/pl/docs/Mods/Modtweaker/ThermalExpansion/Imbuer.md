# Imbuer Alchemiczny

## Pakiet

`Imbuer`

## Dodanie

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack output, IItemStack inputFluid, int energy);

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## Usuwanie

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(wejście IItemStack, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
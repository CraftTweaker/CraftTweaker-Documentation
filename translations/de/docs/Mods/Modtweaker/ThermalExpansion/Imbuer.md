# Alchemischer Imbuer

## Paket

`mods.thermalexpansion.Imbuer`

## Addition

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack-Ausgabe, IItemStack-Eingabe, ILiquidStack-InputFluid, Input-Energie);

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## Entfernen

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(IItemStack Eingang, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
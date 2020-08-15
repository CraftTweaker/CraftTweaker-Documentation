# Inbuer Alquímico

## Paquete

`mods.thermalexpansion.Imbuer`

## Adicional

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(salida ILiquidStack, entrada ItemStack, ILiquidStack inputFluid, int energy);

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## Eliminar

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(entrada IItemStack, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
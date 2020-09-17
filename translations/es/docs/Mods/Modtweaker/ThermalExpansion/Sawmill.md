# Aserradero

## Paquete

`mods.thermalexpansion.aserradero`

## Adicional

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(Salida de ItemStack ItemStack, entrada de ItemStack int, energía de int, @Optional ItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Eliminar

```zenscript
mods.thermalexpansion.Sawmill.removeRecipe(entrada IItemStack);

mods.thermalexpansion.Sawmill.removeRecipe(<minecraft:painting>);
```
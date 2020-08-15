# Pulverizador

## Paquete

`mods.thermalexpansion.Pulverizer`

## Adicional

```zenscript
mods.thermalexpansion.Pulverizer.addRecipe(salida IItemStack, entrada ItemStack, energía int, @Optional ItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Eliminar

```zenscript
mods.thermalexpansion.Pulverizer.removeRecipe(IItemStack input);

mods.thermalexpansion.Pulverizer.removeRecipe(<thermalfoundation:material:136>);
```
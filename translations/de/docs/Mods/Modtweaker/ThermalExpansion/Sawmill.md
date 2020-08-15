# Sägewerk

## Paket

`mods.thermalexpansion.Sawmill`

## Addition

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(IItemStack Output, IItemStack Input, int Energie, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Entfernen

```zenscript
mods.thermalexpansion.Säge.removeRecipe(IItemStack Eingang);

mods.thermalexpansion.Säge.removeRecipe(<minecraft:painting>);
```
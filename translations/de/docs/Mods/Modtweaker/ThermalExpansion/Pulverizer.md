# Pulverizer

## Paket

`mods.thermalexpansion.Pulverizer`

## Addition

```zenscript
mods.thermalexpansion.Pulverizer.addRecipe(IItemStack Output, IItemStack Input, int Energie, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Entfernen

```zenscript
mods.thermalexpansion.Pulverizer.removeRecipe(IItemStack Eingang);

mods.thermalexpansion.Pulverizer.removeRecipe(<thermalfoundation:material:136>);
```
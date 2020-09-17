# Pulvérisateur

## Paquet

`mods.thermalexpansion.Pulverizer`

## Ajouter

```zenscript
mods.thermalexpansion.Pulverizer.addRecipe(sortie IItemStack, entrée IItemStack, entrée int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Retirer

```zenscript
mods.thermalexpansion.Pulverizer.removeRecipe(IItemStack input);

mods.thermalexpansion.Pulverizer.removeRecipe(<thermalfoundation:material:136>);
```
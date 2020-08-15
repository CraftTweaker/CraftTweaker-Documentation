# Scierie

## Paquet

`format@@0 mods.thermalexpansion.Sawmill`

## Ajouter

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(sortie IItemStack, entrée IItemStack, entrée int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:stick> , 1500, <minecraft:stone>, 20);
```

## Retirer

```zenscript
mods.thermalexpansion.Sawmill.removeRecipe(IItemStack input);

mods.thermalexpansion.Sawmill.removeRecipe(<minecraft:painting>);
```
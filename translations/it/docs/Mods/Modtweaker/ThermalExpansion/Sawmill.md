# Segheria

## Pacchetto

`mods.thermalespansionion.Sawmill`

## Addizione

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(IItemStack output, IItemStack input, int Energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Rimozione

```zenscript
mods.thermalexpansion.Sawmill.removeRecipe(IItemStack input);

mods.thermalexpansion.Sawmill.removeRecipe(<minecraft:painting>);
```
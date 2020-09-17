# Пульверизатор

## Пакет

`mods.thermalexpansion.Pulverizer`

## Сложение

```zenscript
mods.thermalexpansion.Pulverizer.addRecipe(IItemStack output, IItemStack input, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Удаление

```zenscript
mods.thermalexpansion.Pulverizer.removeRecipe(IItemStack);

mods.thermalexpansion.Pulverizer.removeRecipe(<thermalfoundation:material:136>);
```
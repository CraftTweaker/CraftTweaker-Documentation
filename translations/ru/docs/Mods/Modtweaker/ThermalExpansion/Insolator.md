# Воронка

## Пакет

`mods.thermalexpansion.Insolator`

## Сложение

```zenscript
//mods.thermalexpansion.Insolator.addRecipe(IItemStack primaryOutput, IItemStack primaryInput, IItemStack secondaryInput, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods. hermalexpansion.Insolator.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20);
```

## Удаление

```zenscript
//mods.thermalexpansion.Insolator.removeRecipe(IItemStack primaryInput, IItemStack secondaryInput);

mods.thermalexpansion.Insolator.removeRecipe(<minecraft:melon_seeds>, <thermalfoundation:fertilizer:1>);
```
# Лесопилка

## Пакет

`mods.thermalexpansion.Sawmill`

## Сложение

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(IItemStack, IItemStack input, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Удаление

```zenscript
mods.thermalexpansion.Sawmill.removeRecipe(IItemStack);

mods.thermalexpansion.Sawmill.removeRecipe(<minecraft:painting>);
```
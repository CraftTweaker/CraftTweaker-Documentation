# Алхимический Имбуер

## Пакет

`mods.thermalexpansion.Имбуер`

## Сложение

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack), вход IItemStack, энергия ILiquidStack;

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## Удаление

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(IItemStack, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```
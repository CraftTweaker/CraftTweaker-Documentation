# Блок разливки

Заливной блок - это машина, которая преобразует входную жидкость в выходной элемент.

## Пакет
`mods.steamagerevolution.CastingBlock`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки

## Сложение

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack input, IItemStack, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Удаление

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(выход IItemStack);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```

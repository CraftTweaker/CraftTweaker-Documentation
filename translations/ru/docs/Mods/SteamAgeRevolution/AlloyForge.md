# Кузня Сплавов

Машина Alloy Forge - это машина, которая преобразует две входные жидкости в одну выходную жидкость.

## Пакет
`mods.steamagerevolution.AlloyForge`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Результат рецепта.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки

## Сложение

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack input, ILiquidStack input, ILiquidStack output, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Удаление

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```

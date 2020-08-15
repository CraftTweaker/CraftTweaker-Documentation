# Печь красного камня

## Пакет

`mods.thermalexpansion.Redstoneпечь`

## Сложение

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(IItemStack, IItemStack input, int energy);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Удаление

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(IItemStack);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Пиролитическое добавление

***Обратите внимание, что энергия умножается на `1.5`. If you specify `2000` energy, the recipe will actually cost `3000` RF. Аналогичным образом, если вы укажете `1500`, это будет стоить `2250` RF.***

Пример рецепта для превращения древесного угля в кокс, при этом получается 250 мб креосотового масла в процессе.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysRecipe(выход IItemStack, ввод IItemStack, интовая энергия, int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Удаление пиролитического Усиления

Удаляет рецепт преобразования угля в угольный кокс.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysRecipe(IItemStack);
mods.thermalexpansion.RedstoneFurnace.removePyrolysRecipe(<minecraft:coal>);
```
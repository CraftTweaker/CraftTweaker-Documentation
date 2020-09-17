# Сжатие

ModTweaker позволяет добавлять или удалять рецепты Squeezer

## Звонок

Вы можете вызвать пакет с помощью `mods.forestry.Squeezer`

## Удаление рецепта

Будьте осторожны, вы не можете удалить рецепты, которые заполняют или сливают жидкие контейнеры, такие как лесные бары!

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack liquid, @Optional IIngredient[] ingredients);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## Добавление рецепта

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] ingredients, int timePerItem, @Optional WeightedItemStack itemput);
//моды. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| Параметр    | Тип                                                            | описание                                                    |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------- |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)                 | Выход рецепта                                               |
| ингредиенты | [IItemStack](/Vanilla/Items/IItemStack/)[]                     | Вход(ы) рецепта                                             |
| timePerItem | int                                                            | Количество входной жидкости на органический предмет требует |
| itemOutput  | [Взвешенный стек предметов](/Vanilla/Items/WeightedItemStack/) | Мультипликатор вывода                                       |
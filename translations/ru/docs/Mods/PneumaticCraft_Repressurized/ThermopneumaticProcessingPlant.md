# Термопневматический перерабатывающий завод

Термопневматический перерабатывающий завод (TPP) использует давление и тепло для преобразования одной жидкости и/или одного твердого ингредиента в другую жидкость. Температура должна быть указана в Кельвине: 273 К = 0°C (32°F), 373 К = 100°C <unk> F).

*Технически, 273.16 K = 0°C, но для целей этого мода упрощается до целого смещения.*

## Звонок

Вы можете вызвать пакет TPP с помощью `mods.pneumaticcraft.thermopneumaticingplant`.

## Удаление

Эта функция удаляет первый рецепт, который он находит с данным [IIngredient](/Vanilla/Variable_Types/IIngredient/) `вывод`:

```zenscript
mods.pneumaticcraft.thermopneumaticingplant.removeRecipe(IIngredient output);
// Пример
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

Эта функция удаляет *все* рецепты TPP:

```zenscript
mods.pneumaticcraft.thermopneumaticingplant.removeAllRecipes();
```

## Добавление

Для добавления рецептов к ППС можно использовать следующие функции:

```zenscript
// Добавляем рецепт, преобразующий входной элемент в выходную жидкость
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(IItemStack itemInput, double pressure, double temperature, ILiquidStack);

// Добавьте рецепт для преобразования входной жидкости и элемента в выходную жидкость (элемент может быть нулем)
модов. neumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, double pressure, double temperature, ILiquidStack output);

// Пример: преобразование воды и редстоуна в некоторые редстоун-жидкости при 3. и 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// Пример: перевести масло 10mB в лаву при температуре 3.0 бар и 473K
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Пример: конвертировать 1 netherrack в 50mB лаву в 1. и 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```
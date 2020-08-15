# Ферментер

ModTweaker позволяет добавлять или удалять рецепты лесного фермента

## Звонок

Вы можете вызвать пакет с помощью `mods.forestry.Fermenter`

## Удаление рецепта

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## Добавление рецепта

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, ресурс IItemStack, ILiquidStack fluidInput, int fermentationValue, float fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

Количество жидкого вывода: значение ферментации * fluidOutModifier

| Параметр            | Тип                                            | описание                                                    |
| ------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| fluidOutput         | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Выход рецепта                                               |
| ресурс              | [IItemStack](/Vanilla/Items/IItemStack/)       | Ввод элемента рецепта                                       |
| fluidInput          | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | жидкий ввод рецепта                                         |
| fermentationValue   | int                                            | Количество входной жидкости на органический предмет требует |
| fluidOutputModifier | int                                            | Мультипликатор вывода                                       |

## Снятие топлива

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## Добавление топлива

```zenscript
//mods.forestry.Fermenter.addFuel(IItemStack, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| Параметр                   | Тип                                      | Описание                                                                                            |
| -------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| элемент                    | [IItemStack](/Vanilla/Items/IItemStack/) | Предмет, чтобы стать валидным топливом для бродильника                                              |
| ферментный цикл            | int                                      | Сколько происходит ферментирование за рабочий цикл, то есть сколько жидкости на входе потребляется. |
| продолжительность сгорания | int                                      | Количество рабочих циклов одного пункта этого топлива продолжается до истечения.                    |
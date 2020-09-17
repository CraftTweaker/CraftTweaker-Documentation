# Дистиллинг

## Добавить рецепт

Метод Distillation "addRecipe" включает:

| Тип           | Тип данных                                            |
| ------------- | ----------------------------------------------------- |
| Вывод         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) массив[] |
| Вывод         | [ItemStack](/Vanilla/Items/IItemStack/) массив[]      |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |
| Flux/t        | Целое                                                 |
| Время в Тиках | Целое                                                 |
| Шанс          | Набор плавающей []                                    |

### Предисловие:

Каждая запись ItemStack связана с соответствующей записью массива "Шанс".

Пример:

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

Значение "Float" должно быть между 0 и 1. Поскольку он преобразует его из числа с плавающей точкой в процентное значение от 0% до 100% I.E:

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

Пока вы можете представить число с плавающей точкой выше 1, оно никогда не даст значения выше 100%

### Пример кода:

```zenscript
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] шанс)

модов. mmersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, [1, 1]);
```
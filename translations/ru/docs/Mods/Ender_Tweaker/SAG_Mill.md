# SAG Mill

## Пакет

`import mods.enderio.SagMill;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/)[] вывод** результатов рецепта.
- **плавает[] шанс** шанс появления этого предмета. Должен иметь ту же длину, что и выход.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **String bonusType** Это влияет на работу шлифовальных шаров. Может быть NONE (не бонус), MULTIPLY_OUTPUT (может увеличить шанс > 1.0), и CHANCE_ТОЛЬКО (шанс на 1.0).
- **int energyCost** Сколько FE использует рецепт. По умолчанию 5000.
- **float xp** xp дается из этого рецепта. Не может быть отрицательным.

## Сложение

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] Выход, float[] попытки, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>
```

## Удаление

```zenscript
mods.enderio.SagMill.removeRecipe(Ввод IItemStack);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```
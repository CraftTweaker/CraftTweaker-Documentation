# Металлургический сплав

## Пакет

`импортировать mods.enderio.AlloySmelter;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] input** Ингредиенты. Должно быть от 1 до 3 компонентов.
- **int energyCost** Сколько FE использует рецепт. По умолчанию 5000.
- **float xp** xp дается из этого рецепта. Не может быть отрицательным.

## Сложение

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## Удаление

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```
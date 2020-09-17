# Увлажнитель

ModTweaker позволяет добавлять или удалять рецепты влажности леса

## Звонок

Вы можете вызвать пакет с помощью `mods.forestry.Moistener`

## Удаление рецепта

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Сложение

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack, IItemStack, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Снятие топлива

```zenscript
//mods.forestry.Moistener.removeFuel(Ингредиент влажности);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Добавление топлива

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack, продукт IItemStack, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Параметр       | Тип                                      | Описание                                                                                              |
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| элемент        | [IItemStack](/Vanilla/Items/IItemStack/) | Предмет, который станет валидным топливом для влажнителя                                              |
| товар          | [IItemStack](/Vanilla/Items/IItemStack/) | Предмет, который оставит рабочую ячейку влажника (например, пшеницу или мульчу).                      |
| Значение влаги | int                                      | Как много этого изделия вносит свой вклад в конечный продукт влаги.                                   |
| этап           | int                                      | На каком этапе представляет этот продукт. Сначала будут потрачены ресурсы с меньшим значением стадии. |
# Морозильник

Морозильная машина - это нижний отсек Фриджера.

Может быть использовано для замораживания предметов, но для работы требуется лед.

## Рецепты морозильника по умолчанию

- Ведро воды -> Лед
- Лед -> Упакованный лёд
- Ведро лавы -> Обсидиан
- Slimeball -> Snowball
- Ядовитый картофель -> Картофель
- Гнилая плоть -> плоть

## Удаление

## Удалите подходящие рецепты морозильника.

```zenscript
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Удаляем рецепты, которые приводят к ледовому
mods.cfm.Freezer. emove(<minecraft:ice>);
// Удаление рецептов, требующих Bucket Lava
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Удаление всех рецептов
mods.cfm.Freezer.remove();
```

## Добавление

Добавьте рецепт морозильника.

## Поддерживает только входы размера 1.

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull final IItemStack, @Nonnull final IItemStack);

// Добавить рецепт, который делает 16 Ледяных из Lava Bucket
mods.cfm.Freezer.addRecipe(<minecraft:ice>. ithAmount(16),<minecraft:lava_bucket>);
// Добавляет рецепт, который делает 16 обсидианов из ведра воды
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithAmount(16),<minecraft:water_bucket>);
// Добавляет рецепт, делающий ведро воды из ведра
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```
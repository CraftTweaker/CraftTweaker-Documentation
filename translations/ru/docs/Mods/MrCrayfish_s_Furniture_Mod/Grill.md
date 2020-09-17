# Решетка

На гриле готовят пищу над горячими углями.

Для приготовления обеих сторон требуется перевернуть еду.

## Рецепты гриля по умолчанию

- Жареная говядина
- Комбинация -> Приготовленная колбаса
- Кебаб -> Приготовленный Кебаб

## Удаление

## Удалить соответствующие рецепты гриля.

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Удаляем рецепты, требующие Beef
mods.cfm.Grill. emove(null,<minecraft:beef>);
// Удаляем рецепты, которые приводят к приготовленному колбасу
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Удаляем все рецепты
mods.cfm.Grill.remove();
```

## Добавление

Добавьте рецепт на гриль.

## Поддерживает только входы размера 1.

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull final IItemStack, @Nonnull final IItemStack);

// Добавить рецепт, который делает Stick из Sause
модов. fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Добавить рецепт, который делает факел из палки
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```
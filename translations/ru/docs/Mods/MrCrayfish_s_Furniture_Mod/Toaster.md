# Тостер

Тоскан хочет начать свой день.

## Рецепты тостер по умолчанию

- Жареная говядина
- Комбинация -> Приготовленная колбаса
- Кебаб -> Приготовленный Кебаб

## Удаление

## Удалить соответствующие рецепты тостера.

```zenscript
mods.cfm.Toaster.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Удаляем рецепты, которые делают Toast из Bread Slice
модов. fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Удаляем все рецепты
mods.cfm.Toaster.remove();
```

## Добавление

Добавить тостер рецепта.

## Поддерживает только входы размера 1.

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull final IItemStack, @Nonnull final IItemStack);

// Добавление рецепта, который делает хлеб из пшеницы
mods.cfm. oaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Добавить рецепт, который делает приготовленную пчелу из пчелы
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```
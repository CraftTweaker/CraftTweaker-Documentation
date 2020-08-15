# Доска для обрыва

Доска для кражи позволяет вам собрать предмет на много частей другого предмета.

По умолчанию вырезает только хлеб на 6 ломтиков.

## Удаление рецептов обломков

## Удалить подходящие рецепты.

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Удаляем рецепт с хлебом в качестве входного элемента
mods.cfm.ChoppingBoard. emove(нулевый,<minecraft:bread>);
// Удаляем рецепты, которые приводят к шести ломтикам хлеба (совпадения, что выше рецепта, так что не будет эффекта, если используется после)
модов. fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withAmount(6));
```

## Добавление рецептов ремесла

Добавить отрезок рецепта.

## Ввод требует размер стека 1.

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final IItemStack, @Nonnull final IItemStack input);

// Добавить рецепт к пшенице в 2 палочки
mods.cfm.ChoppingBoard. ddRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Добавить рецепт в хлеб в 3 пшеницу
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```
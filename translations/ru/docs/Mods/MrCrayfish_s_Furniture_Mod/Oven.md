# Микроволновая

Микроволновая вода нагревает продукты питания.

## Микроволновые Рецепты

- Жареная говядина
- Свинины-> Жареная свинина
- Картофель -> Печёный картофель
- Курица -> Жареная курица
- Рыба -> Приготовленная рыба
- Лосось -> Приготовленный лосось
- Плоть -> Приготовленная плоть

## Удаление

## Удалить соответствующие рецепты духовки.

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Удаляем рецепты, которые приводят к приготовленным Flesh
mods.cfm.Oven. emove(<cfm:item_flesh_cooked>);
// Удаляем рецепты, требующие картофеля
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Удаляем все рецепты
mods.cfm.Oven.remove();
```

## Добавление

## Добавить рецепт в духовку.

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull final IItemStack, @Nonnull final IItemStack);

// Добавляем рецепт, который делает два яблока из одного палки
модов. fm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>);
```
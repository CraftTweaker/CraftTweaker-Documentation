# Микроволновая

Микроволновая вода нагревает продукты питания.

## Микроволновые Рецепты

- Жареная говядина
- Картофель -> Печёный картофель

## Удаление

## Удалить соответствующие рецепты микроволновой печи.

```zenscript
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Удаляем рецепты, требующие Potato
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// Удаляем рецепты, которые приводят к Cooked Beef
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Удаляем все рецепты
mods.cfm.Microwave.remove();
```

## Добавление

## Добавить микроволновый рецепт.

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull final IItemStack, @Nonnull final IItemStack);

// Добавляем рецепт, который делает 4 палки из одного сахарного тростника
модов. fm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```
# Блок-режущий

## Пакет

`импорт mods.ic2.BlockCutter;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **@Optional int hardness** Минимальная жесткость для лезвия.

## Сложение

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Удаление

Сейчас просто удалите соответствующую строку в `config/ic2/block_cutter.ini`.
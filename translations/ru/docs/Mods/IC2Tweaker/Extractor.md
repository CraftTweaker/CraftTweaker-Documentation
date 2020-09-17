# Экстрактор

## Пакет

`import mods.ic2.Extractor;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**

## Сложение

```zenscript
mods.ic2.Extractor.addRecipe(IItemStack, Ingredient input);

mods.ic2.Extractor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Удаление

- При использовании Ic2 экспериментальный, чтобы удалить рецепт, просто удалите соответствующую строку в `config/ic2/extractor.ini`
- При использовании Ic2 Classic, чтобы удалить рецепт, просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.
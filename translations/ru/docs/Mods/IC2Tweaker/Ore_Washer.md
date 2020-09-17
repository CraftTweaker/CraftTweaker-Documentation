# Мойка руды

## Пакет

`импорт mods.ic2.OreWasher;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **@Optional int water** Количество воды, необходимой для одного раунда обработки этого рецепта, измеренное в мб. По умолчанию 1000 если не указано.

## Сложение

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] Выход, IIngredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Удаление

- При использовании Ic2 экспериментальный, чтобы удалить рецепт, просто удалите соответствующую строку в `config/ic2/ore_washer.ini`
- При использовании Классических и Ic2c экстрактов для удаления рецепта просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.
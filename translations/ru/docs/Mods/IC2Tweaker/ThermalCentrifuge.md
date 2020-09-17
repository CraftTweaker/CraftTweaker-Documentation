# Термальная Центрифуга

## Пакет

`импорт mods.ic2.ThermalCentri<unk> ;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **@Optional int minHeat**

## Сложение

```zenscript
mods.ic2.ThermalCentri<unk> .addRecipe([IItemStack[] outputs, IIngredient input, @Optional int minHeat);

mods.ic2.ThermalCentri<unk> .addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>
```

## Удаление

- При использовании Ic2 экспериментальный, чтобы удалить рецепт, просто удалите соответствующую строку в `config/ic2/thermal_centri<unk> .ini`
- При использовании Классических и Ic2c экстрактов для удаления рецепта просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.
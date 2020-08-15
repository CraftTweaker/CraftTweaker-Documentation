# Металлический Бывший

## Пакет

`import mods.ic2.MetalFormer;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**

## Добавить Рецепт Рецепта

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack, Ingredient input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Удалить рецепт резки

- При использовании Ic2 Experimental, чтобы удалить рецепт, просто удалите соответствующую строку в `config/ic2/metal_former_cutting.ini`.
- При использовании Классических и Ic2c экстрактов для удаления рецепта просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.

## Добавить рецепт выдавливания

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(выход IItemStack, ввод IIngredient);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Удалить рецепт выдавливания

- При использовании Ic2 Experimental, чтобы удалить рецепт, просто удалите соответствующую строку в `config/ic2/metal_former_extruding.ini`.
- При использовании Классических и Ic2c экстрактов для удаления рецепта просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.

## Добавить Рецепт Вращения

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack, ввод IIngredient);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Удалить рецепт вращения

- При использовании Ic2 экспериментальный, чтобы удалить рецепт, просто удалите соответствующую строку в `config/ic2/metal_former_rolling.ini`
- При использовании Классических и Ic2c экстрактов для удаления рецепта просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.
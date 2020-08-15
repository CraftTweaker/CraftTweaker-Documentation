# Кусочек 'н'

## Пакет

`импорт mods.enderio.SliceNSplice;`

## Методы

**- [IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] input** Ингредиенты. Должно быть от 1 до 6 компонентов.

**- int energyCost** Сколько FE использует рецепт. По умолчанию 5000.

**- float xp** xp предоставляется из этого рецепта. Не может быть отрицательным.

## Сложение

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## Удаление

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```
# Разливка

Пакет `Разливка` позволяет добавлять или удалять рецепты Кастинга.

## Звонок

Вы можете вызвать пакет Кастинга через `mods.tconstruct.Casting`

## Добавить Рецепты Разливки

Вы можете добавить рецепты для обоев, литья столов и бассейнов: Методы равны их параметрам, изменяя только их имена.

```zenscript
//mods.tconstruct.Casting.addTableRecipe(IItemStack, IIngredient cast, fluid ILiquidStack, int amount, @Optional boolean consumeCast, @Optional int time);
mods. construct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
моды. construct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct. asting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true, 200);


//моды. construct.Casting.addBasinRecipe(IItemStack, IIngredient cast, ILiquidStack fluid, int amount, @Optional boolean consumeCast, @Optional int time);
mods. construct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
модов. construct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true, 200);
```

## Удаление рецептов Заказчика

Удаление рецептов возможно также для литья таблиц и бассейнов:

```zenscript
//mods.tconstruct.Casting.removeTableRecipe(IItemStack output);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>);

//mods.tconstruct.Casting.removeTableRecipe(IItemStack output, ILiquidStack input);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>, <liquid:molten_iron>);



//mods.tconstruct.Casting.removeBasinRecipe(IItemStack output);
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:gold_block>);

//mods.tconstruct.Casting.removeBasinRecipe(IItemStack output, ILiquidStack input);
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:gold_block>, <liquid:molten_gold>);
```
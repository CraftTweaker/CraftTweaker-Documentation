# Таяние

Пакет `Плавление` позволяет добавлять или удалять рецепты плавления (item->жидкость в плавильниках).

## Звонок

Вы можете вызвать пакет плавления с помощью `mods.tconstruct.Melting`

## Добавить Плавающие Рецепты

```zenscript
//mods.tconstruct.Melting.addRecipe(ILiquidStack, IIngredient input, @Optional int temp);
mods.tconstruct.Melting.addRecipe(<liquid:molten_gold> * 144,<minecraft:gold_ingot>);
mods.tconstruct.Melting. ddRecipe(<liquid:molten_iron> * 144,<minecraft:iron_ingot>, 500);

//addEntityMelting(IEntityDefinition, стек ILiquidStack);
//Вы можете просто переопределить существующий рецепт, не нужно удалять его сначала!
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:sheep>, <liquid:cryotheum>);
mods.tconstruct.Melting.addEntityMelting(<entity:minecraft:villager>, <liquid:cryotheum>);

```

## Удаление рецептов плавления

```zenscript
//mods.tconstruct.Melting.removeRecipe(ILiquidStack);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>);

//mods.tconstruct.Melting.removeRecipe(ILiquidStack output, IItemStack);
mods.tconstruct.Melting.removeRecipe(<liquid:molten_iron>, <minecraft:iron_ingot>);

//removeEntityMelting(IEntityDefinition entity);
mods.tconstruct.Melting.removeEntityMelting(<entity:minecraft:villager>);
```
# Конденсатор

The *condenser* package is used for adding or removing recipes to/from the Condenser.

## Звонок

You can call the *condenser* package using `mods.skyresources.condenser`

## Добавление рецепта

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## Удаление рецепта

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```
# Терминовый Фабрикатор

ModTweaker позволяет вам добавлять или удалять рецепты термотрикатора леса

## Звонок

Вы можете позвонить по номеру `mods.forestry.ThermionicFabricator`

## Удаление рецепта/ast

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## Добавление рецепта

```zenscript
//mods.forestry.ThermionicFabricator.addCast(IItemStack, IIngredient[][] ингредиенты, ILiquidStack liquidStack, @Optional IItemStack);
mods.forestry.ThermionicFabricator. ddCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null],[null,null,null,null]], <liquid: glass> * 200);
mods.forestry. hermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null],[null,null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## Удаление плавки

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## Плавильное добавление

Вы можете добавить каждую жидкость в игру в результате переплавки, но в настоящее время рекомендуется только `<liquid:glass>` из-за ошибок, возникающих с другими жидкостями.

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, элемент IItemStack, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```
# Fundición de Aleación

## Paquete

`importar mods.enderio.Alloysmallelter;`

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] entrada** Los ingredientes. Debe estar entre 1 y 3 ingredientes.
- **int energyCost** Cuánto utiliza la receta. Por defecto es 5000.
- **xp decimal** El xp se concede de esta receta. Puede no ser negativo.

## Adicional

```zenscript
mods.enderio.Alloysmallelter.addRecipe(salida ItemStack, IIngredient[] entrada, @Optional int energyCost, @Optional float xp);

mods.enderio.Alloymirrelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## Eliminar

```zenscript
mods.enderio.AlloySmelter.removeRecipe(salida IItemStack);

mods.enderio.Alloymirrelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```
# Cortar 'n' Splice

## Paquete

`importar mods.enderio.SliceNSplice;`

## Métodos

**- [ItemStack](/Vanilla/Items/IItemStack/) salida** El resultado de la receta.

**- [IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] entrada** Los ingredientes. Debe estar entre 1 y 6 ingredientes.

**- int energyCost** Cuánto utiliza la receta. Por defecto es 5000.

**- xp float** El xp se concede de esta receta. Puede no ser negativo.

## Adicional

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(Salida ItemStack, entrada IIngredient[], @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## Eliminar

```zenscript
mods.enderio.SliceNSplice.removeRecipe(salida IItemStack);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```